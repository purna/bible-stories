/**
 * DECISIONLOG.JS
 * Records every moral/narrative choice the player makes, tagged for
 * later lookup. Each downstream reaction traces back to a *specific*
 * choice, never an aggregate score — per the design in
 * __docs/decision-system.ts.
 */

const DecisionLog = (function () {
    let decisions = [];

    /** @param {Object} decision { id, sceneId, chapter, tags } */
    function record(decision) {
        decisions.push({
            id: decision.id,
            sceneId: decision.sceneId,
            chapter: decision.chapter,
            tags: decision.tags || [],
        });
    }

    function made(id) {
        return decisions.some(d => d.id === id);
    }

    function hasTag(tag) {
        return decisions.some(d => d.tags.includes(tag));
    }

    function tagCount(tag) {
        return decisions.filter(d => d.tags.includes(tag)).length;
    }

    function mostRecentWithTag(tag) {
        for (let i = decisions.length - 1; i >= 0; i--) {
            if (decisions[i].tags.includes(tag)) return decisions[i];
        }
        return undefined;
    }

    function getLog() {
        return [...decisions];
    }

    function serialize() {
        return JSON.stringify(decisions);
    }

    function deserialize(json) {
        try {
            decisions = JSON.parse(json);
        } catch {
            decisions = [];
        }
    }

    function reset() {
        decisions = [];
    }

    return {
        record, made, hasTag, tagCount,
        mostRecentWithTag, getLog,
        serialize, deserialize, reset,
    };
})();
