/**
 * VISIONENGINE.JS
 * The interpretation minigame — the mechanic unique to this project.
 * Implements the loop from __docs/daniel-gameplay-loop.md and
 * __docs/daniel-implementation/02-gameplay-systems.md:
 *   gather fragments → assemble a reading → choose delivery → resolve
 *
 * Plain-JS module (no build step) matching the existing comic architecture.
 * Reads state from StateManager; writes consequences back to it.
 */

const VisionEngine = (function () {
    let scene = null;
    let gathered = [];
    let distortion = 0;
    let startedAt = 0;
    let active = false;

    const DELIVERY = { PLAIN: "plain", SOFTENED: "softened" };

    /* ── Scene lifecycle ───────────────────────────────────────── */

    /** @param {Object} visionScene { id, chapter, fragments, riskTimerSeconds, stakesText } */
    function loadScene(visionScene) {
        scene = visionScene;
        gathered = [];
        distortion = 0;
        active = false;
    }

    /** Load a scene from its individual JSON file. */
    async function loadSceneFromFile(sceneId) {
        try {
            const indexRes = await fetch('data/scenes/index.json');
            const index = await indexRes.json();
            const filename = index.scenes[sceneId];
            if (!filename) {
                throw new Error('Scene not found in index: ' + sceneId);
            }
            const sceneRes = await fetch(`${index.baseDir}/${filename}`);
            const sceneData = await sceneRes.json();
            loadScene(sceneData);
            return sceneData;
        } catch (error) {
            console.warn('Failed to load scene file, falling back to preloaded scenes:', error);
            return null;
        }
    }

    function start() {
        if (!scene) return false;
        gathered = [];
        distortion = 0;
        startedAt = performance.now();
        active = true;
        return true;
    }

    function isRunning() {
        return active;
    }

    function getScene() {
        return scene;
    }

    /* ── Discernment phase (symbol gathering) ─────────────────── */

    /** Call when the player collects a fragment.
     *  Passing too quickly after the previous collection risks Distortion.
     *  Decoy fragments always add Distortion. */
    function collect(fragmentId) {
        if (!active || !scene) return;

        const fragment = scene.fragments.find(f => f.id === fragmentId);
        if (!fragment || gathered.includes(fragment)) return;

        const elapsed = (performance.now() - startedAt) / 1000;
        const avgTimePerFrag = elapsed / (gathered.length + 1);
        const rushPenalty = avgTimePerFrag < 1.5;

        const discernmentFactor = Math.max(0, 1 - StateManager.getMeters().discernment / 100);

        if (fragment.isDecoy || (rushPenalty && Math.random() < discernmentFactor)) {
            distortion = Math.min(1, distortion + 0.2);
        }
        gathered.push(fragment);
    }

    function getGathered() {
        return [...gathered];
    }

    function getDistortion() {
        return distortion;
    }

    function timeRemaining() {
        const elapsed = (performance.now() - startedAt) / 1000;
        return Math.max(0, scene.riskTimerSeconds - elapsed);
    }

    /** True when enough meaningful fragments have been collected to
     *  deliver an interpretation (regardless of remaining decoys). */
    function canDeliver() {
        return gatherCount() >= scene.fragments.filter(f => !f.isDecoy).length;
    }

    function gatherCount() {
        return gathered.filter(f => !f.isDecoy).length;
    }

    function totalCount() {
        return scene ? scene.fragments.filter(f => !f.isDecoy).length : 0;
    }

    /* ── Delivery phase ───────────────────────────────────────── */

    /** Step 3/4: deliver the reading, resolve state changes.
     *  @param {"plain"|"softened"} delivery
     */
    function deliver(delivery) {
        if (!active || !scene) return;
        active = false;

        const reign = StateManager.getReignForChapter(scene.chapter);
        const accurate = distortion < 0.5;

        // Record the delivery itself in the decision log for later reactions.
        const deliveryTags = [];
        if (accurate && delivery === DELIVERY.PLAIN) {
            StateManager.incrementMeters({ discernment: 8 });
            if (reign) StateManager.adjustReign(reign, { suspicion: 3 });
            deliveryTags.push("loyalty:god", "cost:public");
        } else if (accurate && delivery === DELIVERY.SOFTENED) {
            StateManager.incrementMeters({ discernment: -4 });
            if (reign) StateManager.adjustReign(reign, { favor: 5 });
            deliveryTags.push("loyalty:diplomatic", "cost:private");
        } else {
            // Inaccurate reading — narrative flag, not a game-over.
            deliveryTags.push("loyalty:failure", "cost:shared");
        }

        StateManager.write(
            `vision_${scene.id}_delivery`, delivery, scene.chapter,
            deliveryTags
        );

        if (!accurate) {
            StateManager.write(
                `vision_${scene.id}_wrong`, true, scene.chapter,
                ["consequence:misread"]
            );
            DecisionLog.record({
                id: `vision_${scene.id}_misread`,
                sceneId: scene.id,
                chapter: scene.chapter,
                tags: ["loyalty:failure", "cost:shared"],
            });
        } else if (delivery === DELIVERY.PLAIN) {
            DecisionLog.record({
                id: `vision_${scene.id}_plain`,
                sceneId: scene.id,
                chapter: scene.chapter,
                tags: ["loyalty:god", "cost:public", "risk:self"],
            });
        } else {
            DecisionLog.record({
                id: `vision_${scene.id}_softened`,
                sceneId: scene.id,
                chapter: scene.chapter,
                tags: ["loyalty:diplomatic", "cost:private", "risk:reputation"],
            });
        }

        return accurate;
    }

    function reset() {
        scene = null;
        gathered = [];
        distortion = 0;
        startedAt = 0;
        active = false;
    }

    return {
        DELIVERY,
        loadScene, loadSceneFromFile,
        start, isRunning, getScene,
        collect, getGathered, getDistortion,
        timeRemaining, canDeliver, gatherCount, totalCount,
        deliver, reset,
    };
})();
