/**
 * COMPASS.JS — Ruth
 * Two-axis narrative meter: Fear <-> Trust, and Haste <-> Wisdom.
 * Settings pulled from config.js. Epilogue text loaded from data/epilogues.json.
 * No inline styles — only classList/CSS custom property updates.
 */

const Compass = (function () {

    const state = {
        fearTrust: 0,
        hasteWisdom: 0,
        beatsCompleted: new Set()
    };

    let epilogues = null;

    const CLAMP = (v) => Math.max(CONFIG.compass.axisMin, Math.min(CONFIG.compass.axisMax, v));

    async function init() {
        const res = await fetch(CONFIG.paths.epilogues);
        epilogues = await res.json();
        renderIndicator();
    }

    function renderIndicator() {
        const el = document.querySelector(CONFIG.compass.indicatorSelector);
        if (!el) return;

        const wisdomRatio = (state.hasteWisdom - CONFIG.compass.axisMin) /
            (CONFIG.compass.axisMax - CONFIG.compass.axisMin);
        el.style.setProperty('--compass-position', `${wisdomRatio * 100}%`);
        const r = Math.round(180 - wisdomRatio * 120);
        const g = Math.round(90 + wisdomRatio * 130);
        const b = Math.round(70 + wisdomRatio * 180);
        el.style.setProperty('--compass-color', `rgb(${r},${g},${b})`);
    }

    function nudge(axis, amount) {
        if (axis === 'trust') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'fear') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'wisdom') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'haste') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'loyalty') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'separation') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'faith') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'doubt') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'kindness') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'selfishness') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'gratitude') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'entitlement') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'honor') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'neglect') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'care') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'indifference') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'justice') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'exploitation') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'boldness') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'presumption') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'integrity') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'ambiguity') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'abundance') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'meager') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'order') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'hasty') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'release') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'grasp') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'blessing') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'formality') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'covenant') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'transaction') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'belonging') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'division') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'inclusion') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'exclusion') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'future') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'memory') state.fearTrust = CLAMP(state.fearTrust - amount);
        else if (axis === 'faithfulness') state.hasteWisdom = CLAMP(state.hasteWisdom + amount);
        else if (axis === 'omission') state.hasteWisdom = CLAMP(state.hasteWisdom - amount);
        else if (axis === 'promise') state.fearTrust = CLAMP(state.fearTrust + amount);
        else if (axis === 'present') state.fearTrust = CLAMP(state.fearTrust - amount);
        renderIndicator();
    }

    function recordBeat(beatId) {
        state.beatsCompleted.add(beatId);
    }

    function getCodexCompletion() {
        return Math.round((state.beatsCompleted.size / CONFIG.compass.totalBeats) * 100);
    }

    function getEpilogue() {
        const ft = state.fearTrust;
        const hw = state.hasteWisdom;
        const NEUTRAL = CONFIG.compass.neutralThreshold;

        if (Math.abs(ft) < NEUTRAL && Math.abs(hw) < NEUTRAL) {
            return epilogues.conflicted;
        }

        const axis1 = ft >= 0 ? 'trust' : 'fear';
        const axis2 = hw >= 0 ? 'wisdom' : 'haste';
        return epilogues[`${axis1}_${axis2}`];
    }

    function getSummary() {
        return {
            epilogue: getEpilogue(),
            codexCompletion: getCodexCompletion(),
            axes: { fearTrust: state.fearTrust, hasteWisdom: state.hasteWisdom }
        };
    }

    function reset() {
        state.fearTrust = 0;
        state.hasteWisdom = 0;
        state.beatsCompleted.clear();
        renderIndicator();
    }

    return { init, nudge, recordBeat, getCodexCompletion, getEpilogue, getSummary, reset };
})();