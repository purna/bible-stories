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
    elijah: 'assets/characters/elijah.svg',
    ahab: 'assets/characters/ahab.svg',
    jezebel: 'assets/characters/jezebel.svg',
    widow: 'assets/characters/widow_zarephath.svg',
    obadiah: 'assets/characters/obadiah.svg',
    prophets_baal: 'assets/characters/prophet_of_baal.svg',
    angel: 'assets/characters/angel_of_the_lord.svg',
    elisha: 'assets/characters/elisha.svg',
    god: 'assets/characters/god.svg',
    narrator: null
};

/* =========================================================================
   STORY DATA — 6 CHAPTERS
   ========================================================================= */
let STORY = [];

/* =========================================================================
   STATE MANAGEMENT & ENGINE
   ========================================================================= */
let actIdx = 0, lineIdx = 0, transitioning = false, choicePending = false, nextLineTimeout = null;

const el = s => document.querySelector(s);
const stage = el('#stage');
const choicesBox = el('#choices');
const delayNote = el('#delayNote');
const nextBtn = el('#nextBtn');
const nextLineBtn = el('#nextLineBtn');
const portal = el('#portal');
const bgGradient = el('#bgGradient');
const dotsBox = el('#dots');

function currentAct() { return STORY[actIdx]; }

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
    if (fx === 'fly') {
        return text.split(' ').map((w) => {
            if (w === '') return ' ';
            const chars = w.split('').map(c => `<span class="fly-char" style="display:inline-block">${c}</span>`).join('');
            return `<span class="fly-word" style="display:inline-block">${chars}</span>`;
        }).join(' ');
    }
    if (fx === 'bounce' || fx === 'sfx') {
        return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * 60}ms">${escapeHtml(w)}</span>`).join(' ');
    }
    if (fx === 'shake' && text) {
        return `<span class="line-inner">${escapeHtml(text)}</span>`;
    }
    if (fx === 'type') {
        return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * 120}ms">${escapeHtml(w)}</span>`).join(' ');
    }
    if (fx === 'glitch' || fx === 'wave' || fx === 'neon' || fx === 'slide-left' || fx === 'slide-right') {
        const step = fx === 'wave' ? 50 : fx === 'neon' ? 40 : 10;
        return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * step}ms">${escapeHtml(w)}</span>`).join(' ');
    }
    if (fx === 'zoom') {
        return text.split(' ').map((w, i) => `<span class="word" style="display:inline-block">${escapeHtml(w)}</span>`).join(' ');
    }
    return text.split(' ').map((w, i) => `<span class="word" style="animation-delay:${i * (fx === 'fade' ? 18 : 10)}ms">${escapeHtml(w)}</span>`).join(' ');
}
function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

async function createFrame(actIndex) {
    const frame = document.createElement('div');
    frame.className = `comic-frame popIn palette-act-${actIndex + 1}`;
    return frame;
}

async function createGraphicContainer(lineData, actData) {
    const graphicContainer = document.createElement('div');
    graphicContainer.id = 'graphicContainer';

    const svgLayer = document.createElement('div');
    svgLayer.id = 'svgLayer';
    const targetSvgKey = lineData.svg || actData.svg;
    svgLayer.innerHTML = await getAsset(`assets/svg/scene_${targetSvgKey}.svg`);
    graphicContainer.appendChild(svgLayer);

    return graphicContainer;
}

function createContentOverlay(lineData) {
    const overlay = document.createElement('div');
    overlay.className = 'content-overlay';

    if (lineData.sfx) {
        const sfxDiv = document.createElement('div');
        sfxDiv.className = 'sfx fx-bounce';
        sfxDiv.innerHTML = buildLineHTML(lineData.sfx, 'sfx');
        overlay.appendChild(sfxDiv);
    }

    if (lineData.text) {
        if (lineData.speaker === 'narrator') {
            const speechElement = document.createElement('div');
            speechElement.className = `caption fx-${lineData.fx} caption-${lineData.align || 'center'}`;
            speechElement.innerHTML = buildLineHTML(lineData.text, lineData.fx);
            overlay.appendChild(speechElement);
        } else {
            const align = lineData.align || 'center';
            const wrap = document.createElement('div');
            wrap.className = `bubble-wrap align-${align}`;
            const speechElement = document.createElement('div');
            speechElement.className = `bubble ${lineData.speaker} fx-${lineData.fx} bubble-${align}`;
            speechElement.innerHTML = buildLineHTML(lineData.text, lineData.fx);
            wrap.appendChild(speechElement);
            overlay.appendChild(wrap);
        }
    }

    return overlay;
}

async function renderLine() {
    if (delayNote.parentNode) delayNote.parentNode.removeChild(delayNote);
    delayNote.className = '';
    delayNote.textContent = '';
    stage.innerHTML = '';
    if (nextLineTimeout) clearTimeout(nextLineTimeout);

    const act = currentAct();
    const line = act.lines[lineIdx];

    const frame = await createFrame(actIdx);
    const graphicContainer = await createGraphicContainer(line, act);
    frame.appendChild(graphicContainer);

    setParticleMode(act.particle || 'dusk');

    stage.appendChild(frame);

    // Wait for the frame to pop in before rendering content inside it.
    // This ensures the drawing appears before the text.
    setTimeout(async () => {
        const overlay = createContentOverlay(line);
        frame.appendChild(overlay);
        overlay.appendChild(delayNote);

        if (line.speaker && CHARACTERS[line.speaker]) {
            const charBox = document.createElement('div');
            charBox.className = 'char-container';
            charBox.innerHTML = await getAsset(CHARACTERS[line.speaker]);
            overlay.appendChild(charBox);
        }

        if (line.fx === 'fly') {
            revealFlyText(overlay);
        }

        if (line.fx === 'zoom') {
            revealZoomText(overlay);
        }

        startNextLineTimer(line, overlay);

        buildDots();
        renderChoices(line);
    }, 200); // A short delay to allow the frame's pop-in animation to start.
}

function startNextLineTimer(lineData, container) {
    const wordEls = container.querySelectorAll('.word');
    if (wordEls.length > 0) {
        let delayStep = 10, duration = 400;
        switch (lineData.fx) {
            case 'bounce': case 'sfx': delayStep = 60; duration = 500; break;
            case 'type': delayStep = 120; duration = 200; break;
            case 'fade': delayStep = 18; duration = 400; break;
            case 'glitch': delayStep = 10; duration = 300; break;
            case 'wave': delayStep = 50; duration = 500; break;
            case 'neon': delayStep = 40; duration = 600; break;
            case 'slide-left': case 'slide-right': delayStep = 10; duration = 400; break;
            case 'zoom': delayStep = 80; duration = 600; break;
        }
        const totalAnimTime = (wordEls.length - 1) * delayStep + duration;
        nextLineTimeout = setTimeout(() => updateNextBtn(), Math.max(totalAnimTime, 1000));
    } else {
        nextLineTimeout = setTimeout(() => updateNextBtn(), 1000);
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

function updateNextBtn() {
    const atEnd = lineIdx === currentAct().lines.length - 1 && !choicePending;
    nextBtn.className = `palette-act-${actIdx + 1}`;
    nextBtn.classList.toggle('show', atEnd);
    nextBtn.textContent = actIdx === STORY.length - 1 ? 'Read Again ↺' : 'Next Chapter ↴';

    const notAtEnd = lineIdx < currentAct().lines.length - 1 && !choicePending;
    nextLineBtn.className = `palette-act-${actIdx + 1}`;
    nextLineBtn.classList.toggle('show', notAtEnd);
    nextLineBtn.textContent = 'Next →';
}

function getFlyParams(container) {
    if (!container) return {};
    return {
        windAngle: parseFloat(container.dataset.windAngle) || 25,
        windStrength: parseFloat(container.dataset.windStrength) || 400,
        scatter: parseFloat(container.dataset.scatter) || 80,
        maxRotation: parseFloat(container.dataset.maxRotation) || 360,
        stagger: parseFloat(container.dataset.stagger) || 0.3
    };
}

function scatterFlyText(frame) {
    const words = frame.querySelectorAll('.fly-word');
    if (!words.length) return Promise.resolve();

    const container = frame.querySelector('.bubble, .caption');
    const p = getFlyParams(container);

    const rad = (p.windAngle * Math.PI) / 180;
    const windX = Math.cos(rad);
    const windY = -Math.sin(rad);

    return new Promise(resolve => {
        gsap.to(words, {
            x: (i) => windX * p.windStrength + (Math.random() - 0.5) * p.scatter * 2,
            y: (i) => windY * p.windStrength + (Math.random() - 0.5) * p.scatter * 2,
            rotation: () => (Math.random() - 0.5) * p.maxRotation * 2,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: resolve
        });
    });
}

function revealFlyText(overlay) {
    const chars = overlay.querySelectorAll('.fly-char');
    if (!chars.length) return;

    const container = overlay.querySelector('.bubble, .caption');
    const p = getFlyParams(container);

    const rad = (p.windAngle * Math.PI) / 180;
    const windX = Math.cos(rad);
    const windY = -Math.sin(rad);

    gsap.set(chars, {
        x: (i) => windX * p.windStrength + (Math.random() - 0.5) * p.scatter * 2,
        y: (i) => windY * p.windStrength + (Math.random() - 0.5) * p.scatter * 2,
        rotation: () => (Math.random() - 0.5) * p.maxRotation * 2,
        opacity: 0
    });

    gsap.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out"
    });
}

function revealZoomText(overlay) {
    const words = overlay.querySelectorAll('.word');
    if (!words.length) return;

    gsap.set(words, {
        scale: 2.5,
        opacity: 0,
        rotation: () => (Math.random() - 0.5) * 10,
        transformOrigin: "center center"
    });

    gsap.to(words, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "elastic.out(1, 0.5)"
    });
}

async function goLine(delta) {
    if (transitioning) return;
    if (choicePending) { choicePending = false; choicesBox.classList.remove('show'); }
    delayNote.className = '';
    nextBtn.classList.remove('show');
    nextLineBtn.classList.remove('show');
    const lines = currentAct().lines;
    const nl = lineIdx + delta;
    if (nl < 0 || nl >= lines.length) return;

    const currentFrame = stage.querySelector('.comic-frame');
    if (currentFrame) {
        transitioning = true;
        const currentLine = currentAct().lines[lineIdx];
        if (currentLine.fx === 'fly') {
            await scatterFlyText(currentFrame);
        }
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
    if (transitioning) return;
    if (actIdx === STORY.length - 1) { fallTransition(() => { actIdx = 0; lineIdx = 0; loadAct(); }); return; }
    fallTransition(() => { actIdx++; lineIdx = 0; loadAct(); });
}

function jumpToChapter(newActIdx) {
    if (transitioning || newActIdx < 0 || newActIdx >= STORY.length || newActIdx === actIdx) return;
    fallTransition(() => { actIdx = newActIdx; lineIdx = 0; loadAct(); });
}

function goPrevChapter() {
    if (transitioning || actIdx === 0) return;
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
    await renderLine();
}

/* =========================================================================
   PARTICLE ENGINE
   ========================================================================= */
const canvas = el('#particles');
const ctx = canvas.getContext('2d');
let particles = [];
let particleMode = 'dusk';
let animFrame;
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function getAngle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  return Math.atan2(dy, dx);
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const PARTICLE_CONFIGS = {
    dusk: { count: 38, colors: ['#FFD84D', '#FF6B5B', '#c8a45a'], minR: 1, maxR: 3, speed: 0.3, drift: 0.15 },
    dream: { count: 50, colors: ['#B98CFF', '#FFD84D', '#fff', '#4ECDC4'], minR: 1, maxR: 4, speed: 0.2, drift: 0.2 },
    fire: { count: 60, colors: ['#FF4500', '#FF6B5B', '#FFD84D', '#fff'], minR: 1, maxR: 5, speed: 0.6, drift: 0.4 },
    constellation: { count: 45, colors: ['#B98CFF', '#FFD84D', '#fff'], minR: 1, maxR: 2, speed: 0.1, drift: 0.05 },
    stars: { count: 55, colors: ['#4ECDC4', '#fff', '#B98CFF'], minR: 1, maxR: 3, speed: 0.15, drift: 0.08 },
    wind_carmel: { count: 120, colors: ['#FF4500', '#ff6b5b', '#e07a5f', '#fefae0', '#FFD84D'], style: 'swirl' },
    wind_chariot: { count: 120, colors: ['#ffde7d', '#ff914d', '#fefae0', '#e07a5f', '#FFD84D'], style: 'swirl' },
    rain: { count: 80, colors: ['#4ECDC4', '#B98CFF', '#fff'], minR: 1, maxR: 2, speed: 1.2, drift: 0.3, style: 'rain' },
    ash: { count: 50, colors: ['#FF4500', '#FF6B5B', '#FFD84D', '#fff'], minR: 1, maxR: 3, speed: 0.4, drift: 0.2, style: 'ash' },
    dust: { count: 40, colors: ['#c8a45a', '#8c6c4f', '#fefae0'], minR: 1, maxR: 3, speed: 0.2, drift: 0.4, style: 'dust' }
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function spawnParticle(cfg) {
    const color = cfg.colors[Math.floor(Math.random() * cfg.colors.length)];
    if (cfg.style === 'swirl') {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color
        };
    }
    const isWind = cfg.style === 'wind';
    const isRain = cfg.style === 'rain';
    const isAsh = cfg.style === 'ash';
    return {
        x: Math.random() * canvas.width,
        y: isRain ? -10 : Math.random() * canvas.height,
        r: cfg.minR + Math.random() * (cfg.maxR - cfg.minR),
        vx: isRain ? (Math.random() - 0.5) * cfg.drift : (isWind ? (cfg.speed * (0.5 + Math.random())) : (Math.random() - 0.5) * cfg.drift),
        vy: isRain ? cfg.speed * (0.8 + Math.random() * 0.4) : (isWind ? (Math.random() - 0.5) * cfg.drift : -(cfg.speed * (0.5 + Math.random()))),
        alpha: isRain ? (0.3 + Math.random() * 0.5) : (isWind ? (0.3 + Math.random() * 0.4) : (0.2 + Math.random() * 0.7)),
        color,
        len: isWind ? (cfg.length || 10) * (0.7 + Math.random() * 0.6) : 0
    };
}

function setParticleMode(mode) {
    particleMode = mode;
    const cfg = PARTICLE_CONFIGS[mode] || PARTICLE_CONFIGS.dusk;
    particles = Array.from({ length: cfg.count }, () => spawnParticle(cfg));
}

function tickParticles(time) {
    const cfg = PARTICLE_CONFIGS[particleMode] || PARTICLE_CONFIGS.dusk;
    
    if (cfg.style === 'swirl') {
        drawSwirl(time, cfg);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isRain = cfg.style === 'rain';
        const isAsh = cfg.style === 'ash';
        const isDust = cfg.style === 'dust';
        const isWind = cfg.style === 'wind';
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (isRain) {
                p.alpha -= 0.003;
            } else if (isWind) {
                p.alpha -= 0.0005;
            } else {
                p.alpha -= 0.002;
            }
            if (isRain) {
                if (p.y > canvas.height + 10 || p.alpha <= 0) {
                    Object.assign(p, spawnParticle(cfg));
                    p.y = -10;
                }
            } else if (isAsh) {
                if (p.y < -10 || p.alpha <= 0) {
                    Object.assign(p, spawnParticle(cfg));
                    p.y = canvas.height + 10;
                }
            } else if (isDust) {
                if (p.x < -10 || p.x > canvas.width + 10 || p.alpha <= 0) {
                    Object.assign(p, spawnParticle(cfg));
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }
            } else if (isWind) {
                if (p.x > canvas.width + 20 || p.y < -20 || p.y > canvas.height + 20) {
                    Object.assign(p, spawnParticle(cfg));
                    p.x = -20;
                }
            } else {
                if (p.alpha <= 0 || p.y < -10) {
                    Object.assign(p, spawnParticle(cfg));
                    p.y = canvas.height + 5;
                }
            }
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.fillStyle = p.color;
            ctx.strokeStyle = p.color;
            if (isRain) {
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.vx * 2, p.y + p.vy * 3);
                ctx.stroke();
            } else if (isAsh) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 0.8, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = Math.max(0, p.alpha * 0.3);
                ctx.beginPath();
                ctx.arc(p.x - p.vx * 2, p.y - p.vy * 2, p.r * 1.5, 0, Math.PI * 2);
                ctx.fill();
            } else if (isDust) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            } else if (isWind) {
                const angle = Math.atan2(p.vy, p.vx);
                ctx.lineWidth = p.r;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(p.x - Math.cos(angle) * p.len, p.y - Math.sin(angle) * p.len);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        });
    }
    animFrame = requestAnimationFrame(tickParticles);
}

function drawSwirl(time, cfg) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    for (let i = 0; i < particles.length; i++) {
        const point = particles[i];
        const p = i / particles.length;
        const mx = mouse.x + Math.cos(p * Math.PI * 2) * 50;
        const my = mouse.y + Math.sin(p * Math.PI * 2) * 50;
        
        const mouseAngle = getAngle(point.x, point.y, mx, my) - Math.PI / 2;
        const angle = mouseAngle + (Math.sin((i * 100 + time) / 1000) * i / 500);
        
        ctx.fillStyle = cfg.colors[Math.floor((angle * 3) + (i / 10)) % cfg.colors.length] + '08';
        
        for (let r = 5; r > 0; r -= 0.5) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
            ctx.fill();
            
            point.x = (point.x + Math.cos(angle) * 1.2);
            if (point.x > canvas.width) point.x = 0;
            else if (point.x < 0) point.x = canvas.width;
            
            point.y = (point.y + Math.sin(angle) * 1.2);
            if (point.y > canvas.height) point.y = 0;
            else if (point.y < 0) point.y = canvas.height;
        }
        
        point.x = (point.x - Math.cos(angle) * 20);
        if (point.x > canvas.width) point.x = 0;
        else if (point.x < 0) point.x = canvas.width;
        
        point.y = (point.y - Math.sin(angle) * 20);
        if (point.y > canvas.height) point.y = 0;
        else if (point.y < 0) point.y = canvas.height;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
setParticleMode('dusk');
animFrame = requestAnimationFrame(tickParticles);

/* =========================================================================
   KEYBOARD NAVIGATION
   ========================================================================= */
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goLine(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goLine(-1);
});

/* =========================================================================
   SWIPE / TOUCH NAVIGATION
   ========================================================================= */
let touchStartX = 0, touchStartY = 0;
document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        dx < 0 ? goLine(1) : goLine(-1);
    }
}, { passive: true });

/* =========================================================================
   SCROLL / WHEEL NAVIGATION
   ========================================================================= */
let wheelCooldown = false;
document.addEventListener('wheel', e => {
    if (wheelCooldown) return;
    wheelCooldown = true;
    setTimeout(() => { wheelCooldown = false; }, 600);
    if (e.deltaY > 0) {
        const atEnd = lineIdx === currentAct().lines.length - 1;
        atEnd ? goNextChapter() : goLine(1);
    } else {
        goLine(-1);
    }
}, { passive: true });

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
   BOOT
   ========================================================================= */
el('#startBtn').addEventListener('click', () => {
    el('#startScreen').classList.add('hide');
});

async function main() {
    try {
        const response = await fetch('elijah-story.json');
        STORY = await response.json();
        populateChapterSelect();
        loadAct();
    } catch (error) {
        console.error("Failed to load story data:", error);
        // You could display an error message to the user here
    }
}

main();