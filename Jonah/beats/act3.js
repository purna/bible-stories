/**
 * BEATS/ACT3.JS — Preaching to Nineveh
 * Input type: quick-decision
 * Dialogue: data/dialogue/act3_nineveh.ink (compiled to .json before use)
 */

const Act3Beats = (function () {

    let cityBlocks = [];

    function setCityBlocks(blocks) {
        cityBlocks = Array.isArray(blocks) ? blocks : [];
    }

    function repentanceWave() {
        // Visually darken each still-standing city block toward sackcloth-grey
        // so the repentance spreads across the city as hotspots resolve.
        cityBlocks.forEach((block, idx) => {
            if (!block || !block.material) return;
            if (block.userData && block.userData.repented) return;
            const target = 0x6a6a6a;
            const start = block.material.color.getHex();
            const steps = 12;
            let step = 0;
            const lerp = () => {
                step += 1;
                const t = step / steps;
                block.material.color.lerpColors(
                    new THREE.Color(start),
                    new THREE.Color(target),
                    t
                );
                if (step < steps) requestAnimationFrame(lerp);
                else if (block.userData) block.userData.repented = true;
            };
            setTimeout(() => requestAnimationFrame(lerp), idx * 120);
        });
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('isometric:repentance'));
        }
    }

    async function loadDialogue() {
        return DialogueEngine.load('act3_nineveh');
    }

    function walkTheCity(daysRemainingWhenSolved = 40) {
        Compass.setAct3Days(daysRemainingWhenSolved);
        Compass.recordBeat('act3_gates');
    }

    function visitMarket() {
        Compass.recordBeat('act3_market');
        // The market hears first; small wave starts here.
        repentanceWave();
    }

    function visitNobleHouse() {
        Compass.recordBeat('act3_noble');
        // The noble house hears; small wave starts here too.
        repentanceWave();
    }

    function preachSermon() {
        // Triggers the spreading-repentance wave animation — visual only.
        Compass.recordBeat('act3_sermon');
        repentanceWave();
    }

    function kingDecrees() {
        Compass.recordBeat('act3_king_decree');
        // The king's decree sweeps the whole city at once.
        repentanceWave();
        // Bend the moral compass toward mercy when the king himself repents.
        if (typeof Compass !== 'undefined' && typeof Compass.nudge === 'function') {
            Compass.nudge('mercy', 6);
        }
    }

    // choiceIndex must match the Ink choice order in jonah_watches:
    // 0 = Watch, 1 = Turn away
    function watchOrTurnAway(choiceIndex) {
        const choseToWatch = choiceIndex === 0;
        if (choseToWatch) {
            Compass.nudge('mercy', 10);
        } else {
            Compass.nudge('justice', 10);
        }
        Compass.recordBeat('act3_watch');
        return typeof DialogueEngine !== 'undefined' ? DialogueEngine.choose(choiceIndex) : null;
    }

    return { loadDialogue, walkTheCity, visitMarket, visitNobleHouse, preachSermon, kingDecrees, watchOrTurnAway, setCityBlocks, repentanceWave };
})();
window.Act3Beats = Act3Beats;
