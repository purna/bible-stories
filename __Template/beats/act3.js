/**
 * BEATS/ACT3.JS — Resolution / Climax
 * Template beat file — customize for your story
 * Input type: trust / completion
 */

const Act3Beats = (function () {

    function trustOutcome(faithful) {
        if (faithful) {
            Compass.nudge('trust', 10);
        } else {
            Compass.nudge('doubt', 10);
        }
        Compass.recordBeat('act3_trust');
    }

    function completeTask(thorough) {
        if (thorough) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('incomplete', 5);
        }
        Compass.recordBeat('act3_complete');
    }

    function witnessResult(humble) {
        if (humble) {
            Compass.nudge('gratitude', 5);
        } else {
            Compass.nudge('pride', 5);
        }
        Compass.recordBeat('act3_witness');
    }

    return { trustOutcome, completeTask, witnessResult };
})();
window.Act3Beats = Act3Beats;