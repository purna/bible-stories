/* =========================================================================
   ASSET LOADER
   ========================================================================= */
const svgCache = new Map();
async function getAsset(path) {
    if (svgCache.has(path)) {
        return svgCache.get(path);
    }
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to fetch: ${path}`);
        const text = await response.text();
        svgCache.set(path, text);
        return text;
    } catch (error) {
        console.error(error);
        return ''; // Return empty string on error
    }
}

/* =========================================================================
   CHARACTER & SCENE DATA
   ========================================================================= */
const CHARACTERS = {
    daniel: 'assets/characters/daniel.svg',
    nebuchadnezzar: 'assets/characters/nebuchadnezzar.svg',
    god: 'assets/characters/god.svg',
    friends: 'assets/characters/friends.svg',
    belshazzar: 'assets/characters/belshazzar.svg',
    darius: 'assets/characters/darius.svg',
    narrator: null
};

/* =========================================================================
   STORY DATA — 6 CHAPTERS
   ========================================================================= */
let STORY = [];
let VISION_SCENES = null;

/* =========================================================================
   STATE MANAGEMENT & ENGINE
   ========================================================================= */
let actIdx = 0, lineIdx = 0, transitioning = false, choicePending = false, nextLineTimeout = null, hasChosen = false, visionMode = false;

const el = s => document.querySelector(s);
const stage = el('#stage');
const choicesBox = el('#choices');
const delayNote = el('#delayNote');
const nextBtn = el('#nextBtn');
const nextLineBtn = el('#nextLineBtn');
const portal = el('#portal');
const bgGradient = el('#bgGradient');
const dotsBox = el('#dots');
const visionOverlay = el('#visionOverlay');
const fragmentCounter = el('#fragmentCounter');
const fragCountSpan = el('#fragCount');
const visionTimer = el('#visionTimer');
const visionClarity = el('#visionClarity');
const meterBar = el('#meterBar');
const meterFill = el('#meterFill');
const meterLabel = el('#meterLabel');
const audio = new AudioManager();

function currentAct() { return STORY[actIdx]; }
window.__comic = { currentAct };

function buildDots() {
    dotsBox.innerHTML = '';
    currentAct().lines.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'dot' + (i === lineIdx ? ' on' : '');
        dotsBox.appendChild(d);
    });
}

function populateChapterSelect() {
    const select = el('#chapterSelect');
    select.innerHTML = '';
    STORY.forEach((act, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Ch ${index + 1}: ${act.name}`;
        select.appendChild(option);
    });
}

function buildLineHTML(text, fx) {
    if (fx === 'bounce' || fx === 'sfx') {
        return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * 60}ms">${escapeHtml(w)}</span>`).join(' ');
    }
    if (fx === 'shake' && text) {
        return `<span class="line-inner">${escapeHtml(text)}</span>`;
    }
    if (fx === 'type') {
        return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * 120}ms">${escapeHtml(w)}</span>`).join(' ');
    }
    return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * (fx === 'fade' ? 18 : 10)}ms">${escapeHtml(w)}</span>`).join(' ');
}
function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function resolveLine(data) {
    if (!data.consequence) return data;
    const god = DecisionLog.hasTag("loyalty:god");
    const diplomatic = DecisionLog.hasTag("loyalty:diplomatic");
    let key;
    if (god && !diplomatic) key = "god_only";
    else if (god && diplomatic) key = "mixed";
    else if (diplomatic) key = "compromised";
    else key = "default";
    const text = data.consequence[key] || data.consequence["default"] || data.text;
    return { ...data, text };
}

async function renderLine() {
    if (delayNote.parentNode) delayNote.parentNode.removeChild(delayNote);
    delayNote.className = '';
    delayNote.textContent = '';
    stage.innerHTML = '';
    if (typeof Parallax !== 'undefined') Parallax.detach();
    if (nextLineTimeout) { clearTimeout(nextLineTimeout); nextLineTimeout = null; }

    const data = resolveLine(currentAct().lines[lineIdx]);
    audio.playLineSfx(data);
    const actAudio = currentAct().audioShift && lineIdx >= currentAct().audioShift.line
        ? currentAct().audioShift
        : currentAct();
    audio.playAct(actAudio);
    const visionId = data.vision === true ? currentAct().vision : data.vision;
    const visionScene = visionId && VISION_SCENES ? VISION_SCENES.find(s => s.id === visionId) : null;

    const frame = document.createElement('div');
    frame.className = `comic-frame popIn palette-act-${actIdx + 1}`;

    const graphicContainer = document.createElement('div');
    graphicContainer.id = 'graphicContainer';

    const targetSvgKey = visionScene ? visionScene.sceneSvg : (data.svg || currentAct().svg);

    // Always load SVG background layer first (Adam-style: SVG behind transparent 3D)
    const svgLayer = document.createElement('div');
    svgLayer.id = 'svgLayer';
    svgLayer.classList.add('svg-behind');
    svgLayer.innerHTML = await getAsset(`assets/svg/act${actIdx + 1}_scene_${targetSvgKey}.svg`);
    graphicContainer.appendChild(svgLayer);

    // 3D scene path (toon shader) on top of SVG with transparent background
    if (use3D && threeCanvas && window.SCENE_FACTORIES && SCENE_FACTORIES[targetSvgKey]) {
        graphicContainer.classList.add('canvas-mode');
        if (threeCanvas.parentNode) threeCanvas.parentNode.removeChild(threeCanvas);
        graphicContainer.appendChild(threeCanvas);
        loadScene3D(targetSvgKey);
        requestAnimationFrame(resize3D);
        if (typeof Parallax !== 'undefined') Parallax.detach();
    } else {
        // Attach SVG parallax to layers with data-depth when no 3D
        if (typeof Parallax !== 'undefined') Parallax.attach(svgLayer);
    }
    frame.appendChild(graphicContainer);

    // Set particle mode per act
    setParticleMode(currentAct().particle || 'dusk');

    const overlay = document.createElement('div');
    overlay.className = 'content-overlay';
    frame.appendChild(overlay);
    stage.appendChild(frame);
    overlay.appendChild(delayNote);

    const lineDelay = data.delay || 800;
    setTimeout(async () => {
        if (data.vision) return;
        if (data.speaker && CHARACTERS[data.speaker]) {
            const charBox = document.createElement('div');
            charBox.className = 'char-container';
            charBox.innerHTML = await getAsset(CHARACTERS[data.speaker]);
            overlay.appendChild(charBox);
        }

        if (data.sfx) {
            const sfxDiv = document.createElement('div');
            sfxDiv.className = 'sfx fx-bounce';
            sfxDiv.innerHTML = buildLineHTML(data.sfx, 'sfx');
            overlay.appendChild(sfxDiv);
        }

        if (data.text) {
            const width = data.width || '1/2';
            const valign = data.valign || 'middle';
            const widthStyle = `--bubble-width: ${width};`;
            const valignStyle = `--bubble-valign: ${valign};`;
            
            if (data.speaker === 'narrator') {
                const speechElement = document.createElement('div');
                speechElement.className = `caption fx-${data.fx} caption-${data.align || 'center'}`;
                speechElement.style.cssText = widthStyle + valignStyle;
                speechElement.innerHTML = buildLineHTML(data.text, data.fx);
                overlay.appendChild(speechElement);
            } else {
                const align = data.align || 'center';
                const wrap = document.createElement('div');
                wrap.className = `bubble-wrap align-${align}`;
                wrap.style.cssText = widthStyle + valignStyle;
                const speechElement = document.createElement('div');
                speechElement.className = `bubble ${data.speaker} fx-${data.fx} bubble-${align}`;
                speechElement.innerHTML = buildLineHTML(data.text, data.fx);
                wrap.appendChild(speechElement);
                overlay.appendChild(wrap);
            }
        }

        const wordEls = overlay.querySelectorAll('.word');
        if (wordEls.length > 0) {
            let delayStep = 10, duration = 400;
            switch (data.fx) {
                case 'bounce': case 'sfx': delayStep = 60; duration = 500; break;
                case 'type': delayStep = 120; duration = 200; break;
                case 'wave': delayStep = 10; duration = 300; break;
                case 'fade': delayStep = 18; duration = 400; break;
            }
            const totalAnimTime = (wordEls.length - 1) * delayStep + duration;
            nextLineTimeout = setTimeout(() => updateNextBtn(), Math.max(totalAnimTime, 1000));
        } else {
            nextLineTimeout = setTimeout(() => updateNextBtn(), 1000);
        }
    }, lineDelay);

    buildDots();
    updateMeter();
    if (visionScene) {
        startVisionMinigame(data, visionScene);
    } else {
        renderChoices(data);
    }
}

function renderChoices(data) {
    choicesBox.innerHTML = '';
    delayNote.classList.remove('show');
    delayNote.textContent = '';
    if (data.choices && !choicePending) {
        choicePending = true;
        choicesBox.classList.add('show');
        data.choices.forEach(c => {
            const b = document.createElement('button');
            b.className = 'choiceBtn';
            b.textContent = c.label;
            b.onclick = () => {
                handleChoiceSelected(c);
                choicesBox.classList.remove('show');
                delayNote.textContent = c.note;
                delayNote.classList.add('show');
                choicePending = false;
                updateNextBtn();
            };
            choicesBox.appendChild(b);
        });
    } else {
        choicesBox.classList.remove('show');
    }
}

function handleChoiceSelected(c) {
    if (!c.decisionId) return;
    hasChosen = true;

    DecisionLog.record({
        id: c.decisionId,
        sceneId: currentAct().id,
        chapter: actIdx,
        tags: c.tags || [],
    });

    StateManager.write(c.decisionId, true, actIdx, c.tags || []);

    if (c.tags) {
        if (c.tags.includes('loyalty:god')) {
            StateManager.incrementMeters({ setApart: 1 });
        } else if (c.tags.includes('loyalty:diplomatic')) {
            StateManager.incrementMeters({ fitIn: 1 });
        }
    }

    const reign = currentAct().reign;
    if (reign) {
        if (c.tags && c.tags.includes('loyalty:god')) {
            StateManager.adjustReign(reign, { suspicion: 2 });
        } else if (c.tags && c.tags.includes('loyalty:diplomatic')) {
            StateManager.adjustReign(reign, { favor: 3 });
        }
    }

    updateMeter();
    saveState();
}

function startVisionMinigame(data, visionScene) {
    visionMode = true;
    choicePending = true;
    choicesBox.classList.remove('show');
    delayNote.classList.remove('show');
    delayNote.textContent = '';

    VisionEngine.loadScene(visionScene);
    VisionEngine.start();
    if (window.StoryRuntime) StoryRuntime.setMode('game');
    if (typeof Parallax !== 'undefined') Parallax.detach();
    if (typeof VFX !== 'undefined') VFX.enterVision();

    fragmentCounter.classList.remove('hidden');
    visionOverlay.classList.add('show');
    visionOverlay.innerHTML = '';

    const prompt = document.createElement('div');
    prompt.className = 'vision-prompt';
    prompt.textContent = visionScene.stakesText;
    visionOverlay.appendChild(prompt);

    const fragContainer = document.createElement('div');
    fragContainer.className = 'vision-fragments';
    if (visionScene.viewBox) {
        const parts = visionScene.viewBox.split(/\s+/).map(Number);
        if (parts.length >= 4 && parts[0] !== parts[2]) {
            const w = parts[2] - parts[0];
            const h = parts[3] - parts[1];
            if (h > 0) fragContainer.style.aspectRatio = w / h;
        }
    }
    visionScene.fragments.forEach(f => {
        const hotspot = document.createElement('button');
        hotspot.type = 'button';
        hotspot.className = 'fragment-hotspot';
        hotspot.setAttribute('aria-label', `Examine vision fragment ${f.id}`);
        const icon = document.createElement('span');
        icon.className = 'frag-icon';
        icon.textContent = '✦';
        hotspot.appendChild(icon);
        hotspot.dataset.fragmentId = f.id;
        if (f.position) {
            hotspot.style.left = f.position.x + '%';
            hotspot.style.top = f.position.y + '%';
        }
        hotspot.addEventListener('click', () => collectFragment(f.id));
        fragContainer.appendChild(hotspot);
    });
    visionOverlay.appendChild(fragContainer);

    updateFragmentCounter();
    tickVisionTimer();
}

function collectFragment(fragmentId) {
    VisionEngine.collect(fragmentId);
    updateFragmentCounter();
    renderVisionHotspotState();
    if (typeof VFX !== 'undefined') VFX.updateVisionVFX();

    if (VisionEngine.canDeliver()) {
        startVisionAssembly();
    } else {
        tickVisionTimer();
    }
}

function startVisionAssembly() {
    const meaningful = VisionEngine.getGathered().filter(fragment => !fragment.isDecoy);
    visionOverlay.innerHTML = '';
    visionOverlay.classList.add('show');
    const assembly = document.createElement('section');
    assembly.className = 'vision-assembly';
    assembly.setAttribute('aria-labelledby', 'visionAssemblyTitle');
    assembly.innerHTML = '<span class="vision-assembly-kicker">INTERPRET THE SIGNS</span><h3 id="visionAssemblyTitle">Build the reading in order</h3><p id="visionAssemblyStatus" role="status" aria-live="polite">Choose the first part of the interpretation.</p><div class="vision-assembly-result" aria-label="Assembled interpretation"></div><div class="vision-assembly-options"></div>';
    visionOverlay.appendChild(assembly);
    const result = assembly.querySelector('.vision-assembly-result');
    const options = assembly.querySelector('.vision-assembly-options');
    const status = assembly.querySelector('#visionAssemblyStatus');
    let expected = 0;
    [...meaningful].reverse().forEach(fragment => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = fragment.meaning;
        button.addEventListener('click', () => {
            if (fragment.id !== meaningful[expected].id) {
                VisionEngine.recordAssemblyMistake();
                updateFragmentCounter();
                status.textContent = 'That sign belongs later. Look for the sequence in the vision.';
                button.classList.remove('assembly-mistake');
                void button.offsetWidth;
                button.classList.add('assembly-mistake');
                return;
            }
            button.remove();
            const step = document.createElement('span');
            step.textContent = fragment.meaning;
            result.appendChild(step);
            expected += 1;
            status.textContent = expected === meaningful.length ? 'The interpretation is assembled.' : `Good. Choose part ${expected + 1}.`;
            if (expected === meaningful.length) setTimeout(showDeliveryChoices, 500);
        });
        options.appendChild(button);
    });
    options.querySelector('button')?.focus();
}

function renderVisionHotspotState() {
    const gathered = VisionEngine.getGathered();
    const hotspots = visionOverlay.querySelectorAll('.fragment-hotspot');
    hotspots.forEach(hotspot => {
        const fragId = hotspot.dataset.fragmentId;
        if (gathered.some(f => f.id === fragId)) {
            hotspot.classList.add('collected');
            hotspot.disabled = true;
        }
    });
}

function updateFragmentCounter() {
    const total = VisionEngine.totalCount();
    fragCountSpan.textContent = VisionEngine.gatherCount() + ' / ' + total;
    const distortion = VisionEngine.getDistortion();
    visionClarity.textContent = distortion >= 0.4 ? 'Distorted' : distortion > 0 ? 'Clouded' : 'Clear';
}

let visionTimerTick = null;

function tickVisionTimer() {
    if (visionTimerTick) clearTimeout(visionTimerTick);
    const remaining = VisionEngine.timeRemaining();
    visionTimer.textContent = Math.ceil(remaining) + 's';
    if (remaining <= 10 && remaining > 0) visionClarity.setAttribute('aria-label', `${Math.ceil(remaining)} seconds remaining`);
    if (remaining <= 0) {
        forceDelivery();
        return;
    }
    if (remaining < 10) {
        visionOverlay.classList.add('vision-urgent');
    }
    visionTimerTick = setTimeout(tickVisionTimer, 1000);
}

function forceDelivery() {
    if (!VisionEngine.isRunning()) return;
    showDeliveryChoices();
}

function showDeliveryChoices() {
    if (visionTimerTick) clearTimeout(visionTimerTick);
    visionOverlay.classList.remove('vision-urgent');
    visionOverlay.innerHTML = '';
    visionOverlay.classList.remove('show');

    choicesBox.innerHTML = '';
    delayNote.classList.remove('show');
    delayNote.textContent = '';
    const data = currentAct().lines[lineIdx];
    if (!data.choices) {
        choicePending = false;
        updateNextBtn();
        return;
    }

    choicePending = true;
    choicesBox.classList.add('show');
    data.choices.forEach(c => {
        const b = document.createElement('button');
        b.className = 'choiceBtn';
        b.textContent = c.label;
        b.onclick = () => {
            onDeliverySelected(c);
        };
        choicesBox.appendChild(b);
    });
}

function onDeliverySelected(c) {
    const delivery = (c.tags && c.tags.includes('loyalty:god'))
        ? VisionEngine.DELIVERY.PLAIN
        : VisionEngine.DELIVERY.SOFTENED;

    const accurate = VisionEngine.deliver(delivery);

    hasChosen = true;
    if (c.tags) {
        if (c.tags.includes('loyalty:god')) {
            StateManager.incrementMeters({ setApart: 1 });
        } else if (c.tags.includes('loyalty:diplomatic')) {
            StateManager.incrementMeters({ fitIn: 1 });
        }
    }

    choicesBox.classList.remove('show');
    delayNote.textContent = c.note;
    if (!accurate) {
        delayNote.textContent += ' [The meaning slipped — something was off…]';
    }
    delayNote.classList.add('show');
    choicePending = false;
    visionMode = false;
    if (window.StoryRuntime) StoryRuntime.setMode('reading');
    fragmentCounter.classList.add('hidden');
    if (typeof Parallax !== 'undefined') Parallax.attach(el('#svgLayer'));
    if (typeof VFX !== 'undefined') VFX.exitVision();
    updateNextBtn();
    updateMeter();
    saveState();
}

function updateMeter() {
    const meters = StateManager.getMeters();
    const total = meters.setApart + meters.fitIn;
    const ratio = total === 0 ? 0.5 : meters.setApart / total;
    if (!hasChosen) {
        meterBar.classList.add('hidden');
        return;
    }
    meterBar.classList.remove('hidden');
    meterFill.style.setProperty('--meter-ratio', Math.round(ratio * 100) + '%');
    const label = ratio > 0.5 ? 'SET APART' : ratio < 0.5 ? 'FIT IN' : 'SET APART';
    if (meterLabel) meterLabel.textContent = label;
    const reign = currentAct().reign;
    if (reign) {
        const r = StateManager.getReign(reign);
        meterBar.title = '♔ ' + reign + ': Favor ' + r.favor + ' | Suspicion ' + r.suspicion;
    }
}

function updateNextBtn() {
    if (window.StoryRuntime) StoryRuntime.setMode(choicePending ? 'choice' : (visionMode ? 'game' : 'reading'));
    const atEnd = lineIdx === currentAct().lines.length - 1 && !choicePending;
    nextBtn.className = `palette-act-${actIdx + 1}`;
    nextBtn.classList.toggle('show', atEnd);
    nextBtn.textContent = actIdx === STORY.length - 1 ? 'Read Again ↺' : 'Next Chapter ↴';

    const notAtEnd = lineIdx < currentAct().lines.length - 1 && !choicePending;
    nextLineBtn.className = `palette-act-${actIdx + 1}`;
    nextLineBtn.classList.toggle('show', notAtEnd);
    nextLineBtn.textContent = 'Next →';
}

async function goLine(delta) {
    if (transitioning || visionMode) return;
    if (choicePending) return;
    delayNote.className = '';
    nextBtn.classList.remove('show');
    nextLineBtn.classList.remove('show');
    const lines = currentAct().lines;
    const nl = lineIdx + delta;
    if (nl < 0 || nl >= lines.length) return;

    const currentFrame = stage.querySelector('.comic-frame');
    if (currentFrame) {
        transitioning = true;
        currentFrame.classList.add('popOut');
        await new Promise(resolve => {
            const onEnd = () => { transitioning = false; resolve(); };
            currentFrame.addEventListener('animationend', onEnd, { once: true });
            setTimeout(onEnd, 500);
        });
    }
    lineIdx = nl;
    await renderLine();
}

function goNextChapter() {
    if (transitioning || visionMode) return;
    if (actIdx === STORY.length - 1) { fallTransition(() => { actIdx = 0; lineIdx = 0; loadAct(); }); return; }
    fallTransition(() => { actIdx++; lineIdx = 0; loadAct(); });
}

function jumpToChapter(newActIdx) {
    if (transitioning || visionMode || newActIdx < 0 || newActIdx >= STORY.length || newActIdx === actIdx) return;
    fallTransition(() => { actIdx = newActIdx; lineIdx = 0; loadAct(); });
}

function goPrevChapter() {
    if (transitioning || visionMode || actIdx === 0) return;
    fallTransition(() => { actIdx--; lineIdx = STORY[actIdx].lines.length - 1; loadAct(); });
}

function fallTransition(mid) {
    transitioning = true;
    portal.classList.add('falling');
    setTimeout(() => {
        mid();
        portal.classList.remove('falling');
        portal.classList.add('rising');
        setTimeout(() => { portal.classList.remove('rising'); transitioning = false; }, 700);
    }, 750);
}

async function loadAct() {
    const act = currentAct();
    el('#chapterSelect').value = actIdx;
    bgGradient.style.background = act.bg;
    document.body.className = `palette-act-${actIdx + 1}`;
    if (act.reign && typeof VFX !== 'undefined') {
        VFX.setReignGrade(act.reign);
    } else if (typeof VFX !== 'undefined') {
        VFX.clearReignGrade();
    }
    choicePending = false;
    nextBtn.classList.remove('show');
    nextLineBtn.classList.remove('show');
    const currentFrame = stage.querySelector('.comic-frame');
    if (currentFrame) {
        transitioning = true;
        currentFrame.classList.add('popOut');
        await new Promise(resolve => {
            const onEnd = () => { transitioning = false; resolve(); };
            currentFrame.addEventListener('animationend', onEnd, { once: true });
            setTimeout(onEnd, 500);
        });
    }
    StateManager.compactBefore(actIdx + 1);
    await renderLine();
    updateMeter();
}

/* =========================================================================
   PARTICLE ENGINE
   ========================================================================= */
const canvas = el('#particles');
const ctx = canvas.getContext('2d');
let particles = [];
let particleMode = 'dusk';
let animFrame;

const PARTICLE_CONFIGS = {
    dusk: { count: 38, colors: ['#FFD84D', '#FF6B5B', '#c8a45a'], minR: 1, maxR: 3, speed: 0.3, drift: 0.15 },
    dream: { count: 50, colors: ['#B98CFF', '#FFD84D', '#fff', '#4ECDC4'], minR: 1, maxR: 4, speed: 0.2, drift: 0.2 },
    fire: { count: 60, colors: ['#FF4500', '#FF6B5B', '#FFD84D', '#fff'], minR: 1, maxR: 5, speed: 0.6, drift: 0.4 },
    constellation: { count: 45, colors: ['#B98CFF', '#FFD84D', '#fff'], minR: 1, maxR: 2, speed: 0.1, drift: 0.05 },
    stars: { count: 55, colors: ['#4ECDC4', '#fff', '#B98CFF'], minR: 1, maxR: 3, speed: 0.15, drift: 0.08 }
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function spawnParticle(cfg) {
    const color = cfg.colors[Math.floor(Math.random() * cfg.colors.length)];
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: cfg.minR + Math.random() * (cfg.maxR - cfg.minR),
        vx: (Math.random() - 0.5) * cfg.drift,
        vy: -(cfg.speed * (0.5 + Math.random())),
        alpha: 0.2 + Math.random() * 0.7,
        color
    };
}

function setParticleMode(mode) {
    particleMode = mode;
    const cfg = PARTICLE_CONFIGS[mode] || PARTICLE_CONFIGS.dusk;
    particles = Array.from({ length: cfg.count }, () => spawnParticle(cfg));
}

function tickParticles() {
    const cfg = PARTICLE_CONFIGS[particleMode] || PARTICLE_CONFIGS.dusk;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.002;
        if (p.alpha <= 0 || p.y < -10) {
            Object.assign(p, spawnParticle(cfg));
            p.y = canvas.height + 5;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });
    animFrame = requestAnimationFrame(tickParticles);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
setParticleMode('dusk');
tickParticles();

/* =========================================================================
    3D SCENE ENGINE — Three.js toon-shader integration
    ========================================================================= */
let renderer3D = null, camera3D = null, scene3D = null;
let threeCanvas = null;
let use3D = false;
let currentSceneKey = null;
let sceneAnimations = [];
let cameraAnim = null;

let cameraTheta = 0;
let cameraPhi = Math.PI / 4;
let cameraDistance = 60;
let cameraRoll = 0;
let cameraConfig = { distance: 60, height: 15 };
let orbitTarget = new THREE.Vector3(0, 0, 0);

window._cinema = {
    theta: 0,
    phi: Math.PI / 4,
    distance: 60,
    roll: 0,
    baseTheta: 0,
    baseDistance: 60,
    targetX: 0,
    targetY: 0,
    targetZ: 0
};

let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let thetaStart = 0, phiStart = 0;
let baseTheta = 0;
const ORBIT_SPEED = 0.008;

function init3D() {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded, using SVG scenes');
        return false;
    }
    renderer3D = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer3D.setClearColor(0x000000, 0);
    renderer3D.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer3D.shadowMap.enabled = true;
    renderer3D.outputEncoding = THREE.sRGBEncoding;
    renderer3D.toneMapping = THREE.ACESFilmicToneMapping;

    threeCanvas = renderer3D.domElement;
    threeCanvas.classList.add('three-canvas');
    threeCanvas.style.pointerEvents = 'auto';

    threeCanvas.addEventListener('mousedown', onDragStart);
    threeCanvas.addEventListener('mousemove', onDragMove);
    threeCanvas.addEventListener('mouseup', onDragEnd);
    threeCanvas.addEventListener('mouseleave', onDragEnd);

    threeCanvas.addEventListener('touchstart', onTouchDragStart, { passive: true });
    threeCanvas.addEventListener('touchmove', onTouchDragMove, { passive: true });
    threeCanvas.addEventListener('touchend', onDragEnd);

    camera3D = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera3D.position.set(0, 15, cameraDistance);
    scene3D = new THREE.Scene();

    use3D = true;
    startRenderLoop();
    return true;
}

function startRenderLoop() {
    let lastTime = 0;
    function render3D(time) {
        requestAnimationFrame(render3D);
        if (!renderer3D || !scene3D || !camera3D) return;
        const dt = (time - lastTime) * 0.001;
        lastTime = time;
        const t = time * 0.001;

        if (!isDragging && cameraAnim) {
            try { cameraAnim(t); } catch (e) {}
        }
        cameraTheta = window._cinema.theta;
        cameraPhi = window._cinema.phi;
        cameraDistance = window._cinema.distance;
        cameraRoll = window._cinema.roll;
        orbitTarget.set(
            window._cinema.targetX || 0,
            window._cinema.targetY || 0,
            window._cinema.targetZ || 0
        );

        updateCameraPosition();

        if (sceneAnimations.length > 0) {
            sceneAnimations.forEach(fn => { try { fn(t); } catch (e) {} });
        }

        renderer3D.render(scene3D, camera3D);
    }
    render3D(0);
}

function loadScene3D(key) {
    if (!renderer3D || !window.SCENE_FACTORIES || !window.SCENE_FACTORIES[key]) {
        return false;
    }
    if (scene3D) {
        scene3D.traverse(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => { if (m && typeof m.dispose === 'function') m.dispose(); });
                } else if (typeof child.material.dispose === 'function') { child.material.dispose(); }
            }
        });
    }
    const result = SCENE_FACTORIES[key]();
    scene3D = result.scene;
    scene3D.background = null; // transparent so SVG background shows through
    sceneAnimations = result.animate ? [result.animate] : [];
    cameraAnim = result.cameraAnimation || null;
    if (result.cameraConfig) {
        cameraConfig = result.cameraConfig;
        const d = cameraConfig.distance || 60;
        cameraDistance = d;
        window._cinema.distance = d;
        window._cinema.baseDistance = d;
        window._cinema.theta = baseTheta;
        window._cinema.baseTheta = baseTheta;
        window._cinema.phi = Math.PI / 4;
        window._cinema.roll = 0;
        window._cinema.targetX = 0;
        window._cinema.targetY = 0;
        window._cinema.targetZ = 0;
    }
    currentSceneKey = key;
    return true;
}

function updateCameraPosition() {
    const phi = cameraPhi;
    const theta = cameraTheta;
    const dist = cameraDistance;
    camera3D.position.set(
        orbitTarget.x + dist * Math.sin(phi) * Math.sin(theta),
        orbitTarget.y + dist * Math.cos(phi) + (cameraConfig.height || 0),
        orbitTarget.z + dist * Math.sin(phi) * Math.cos(theta)
    );
    if (cameraRoll !== 0) {
        camera3D.up.set(Math.sin(cameraRoll), Math.cos(cameraRoll), 0);
    } else {
        camera3D.up.set(0, 1, 0);
    }
    camera3D.lookAt(orbitTarget);
    if (cameraRoll !== 0) {
        camera3D.up.set(0, 1, 0);
    }
}

function resize3D() {
    const gc = document.getElementById('graphicContainer');
    if (renderer3D && camera3D && gc) {
        const w = gc.clientWidth;
        const h = gc.clientHeight;
        renderer3D.setSize(w, h);
        camera3D.aspect = w / h;
        camera3D.updateProjectionMatrix();
    }
}

function onDragStart(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    thetaStart = cameraTheta;
    phiStart = cameraPhi;
}
function onDragMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    cameraTheta = thetaStart - dx * ORBIT_SPEED;
    cameraPhi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, phiStart + dy * ORBIT_SPEED));
}
function onDragEnd() {
    isDragging = false;
    baseTheta = cameraTheta;
    window._cinema.baseTheta = baseTheta;
}

function onTouchDragStart(e) {
    if (!e.touches[0]) return;
    isDragging = true;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    thetaStart = cameraTheta;
    phiStart = cameraPhi;
}
function onTouchDragMove(e) {
    if (!isDragging || !e.touches[0]) return;
    const dx = e.touches[0].clientX - dragStartX;
    const dy = e.touches[0].clientY - dragStartY;
    cameraTheta = thetaStart - dx * ORBIT_SPEED;
    cameraPhi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, phiStart + dy * ORBIT_SPEED));
}

window.addEventListener('resize', () => {
    resizeCanvas();
    resize3D();
});

/* =========================================================================
   KEYBOARD NAVIGATION
   ========================================================================= */
document.addEventListener('keydown', e => {
    if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goLine(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goLine(-1);
});

/* =========================================================================
   SWIPE / TOUCH NAVIGATION
   ========================================================================= */
let touchStartX = 0, touchStartY = 0;
document.addEventListener('touchstart', e => {
    if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener('touchend', e => {
    if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        dx < 0 ? goLine(1) : goLine(-1);
    }
}, { passive: true });

/* =========================================================================
    SCROLL / WHEEL NAVIGATION — camera orbit in 3D, line nav otherwise
    ========================================================================= */
let wheelCooldown = false;
document.addEventListener('wheel', e => {
    if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
    if (wheelCooldown) return;

    if (use3D && currentSceneKey) {
        wheelCooldown = true;
        setTimeout(() => { wheelCooldown = false; }, 20);
        const delta = e.deltaY > 0 ? 0.06 : -0.06;
        cameraTheta += delta;
        window._cinema.theta = cameraTheta;
        e.preventDefault();
        return;
    }

    wheelCooldown = true;
    setTimeout(() => { wheelCooldown = false; }, 600);
    if (e.deltaY > 0) {
        const atEnd = lineIdx === currentAct().lines.length - 1;
        atEnd ? goNextChapter() : goLine(1);
    } else {
        goLine(-1);
    }
}, { passive: false });

/* =========================================================================
   CHAPTER SELECT
   ========================================================================= */
el('#chapterSelect').addEventListener('change', e => {
    jumpToChapter(Number(e.target.value));
});

/* =========================================================================
   NEXT / PREV BUTTONS
   ========================================================================= */
nextBtn.addEventListener('click', goNextChapter);
nextLineBtn.addEventListener('click', () => goLine(1));

/* =========================================================================
   SAVE / LOAD
    ========================================================================= */
const SAVE_KEY = 'daniel-comic-save';

function saveState() {
    try {
        const save = {
            state: StateManager.serialize(),
            decisions: DecisionLog.serialize(),
            actIdx, lineIdx, hasChosen,
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch (e) {
        console.warn('Could not save state:', e);
    }
}

function loadState() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return false;
        const save = JSON.parse(raw);
        StateManager.deserialize(save.state);
        DecisionLog.deserialize(save.decisions);
        actIdx = save.actIdx || 0;
        lineIdx = save.lineIdx || 0;
        hasChosen = save.hasChosen || false;
        return true;
    } catch (e) {
        return false;
    }
}

function clearSave() {
    localStorage.removeItem(SAVE_KEY);
}

/* =========================================================================
    BOOT
    ========================================================================= */
el('#startBtn').addEventListener('click', () => {
    el('#startScreen').classList.add('hide');
});

async function loadVisionScenes() {
    try {
        const indexRes = await fetch('data/scenes/index.json');
        const index = await indexRes.json();
        const scenes = [];
        for (const [id, filename] of Object.entries(index.scenes)) {
            const sceneRes = await fetch(`${index.baseDir}/${filename}`);
            scenes.push(await sceneRes.json());
        }
        return scenes;
    } catch (error) {
        console.warn('Scene index failed, trying legacy aggregate file:', error);
        try {
            const visionRes = await fetch('data/vision-scenes.json');
            return await visionRes.json();
        } catch (e2) {
            console.warn('Legacy vision scenes also failed:', e2);
            return null;
        }
    }
}

async function main() {
    try {
        const res = await fetch('data/manifest.json');
        const manifest = await res.json();
        STORY = await Promise.all(manifest.acts.map(async act => {
            const r = await fetch(`data/${act.file}`);
            return r.json();
        }));
        audio.preloadStory(STORY);
        VISION_SCENES = await loadVisionScenes();
        populateChapterSelect();
        init3D();
        loadState();
        loadAct();
    } catch (error) {
        console.error("Failed to load story data:", error);
        // You could display an error message to the user here
    }
}

main();
