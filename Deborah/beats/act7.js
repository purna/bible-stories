/**
 * BEATS/ACT7.JS — The Song
 * Input type: remembrance / worship
 */

const Act7Beats = (function () {

    function singVictory(heartfelt) {
        if (heartfelt) {
            Compass.nudge('gratitude', 10);
        } else {
            Compass.nudge('routine', 10);
        }
        Compass.recordBeat('act7_sing');
    }

    function recallFaithfulness(specific) {
        if (specific) {
            Compass.nudge('memory', 5);
        } else {
            Compass.nudge('vague', 5);
        }
        Compass.recordBeat('act7_recall');
    }

    function landRests(peaceful) {
        if (peaceful) {
            Compass.nudge('shalom', 10);
        } else {
            Compass.nudge('unrest', 10);
        }
        Compass.recordBeat('act7_rest');
    }

    return { singVictory, recallFaithfulness, landRests };
})();
window.Act7Beats = Act7Beats;