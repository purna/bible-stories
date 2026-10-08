/**
 * BEATS/ACT14.JS — Moses' Final Reviews and Instructions
 * Input type: teaching / choice
 */

const Act14Beats = (function () {

    function teachCommands(attentive) {
        if (attentive) {
            Compass.nudge('remembrance', 8);
        } else {
            Compass.nudge('forgetfulness', 8);
        }
        Compass.recordBeat('act14_teach');
    }

    function chooseLife(decisive) {
        if (decisive) {
            Compass.nudge('life', 10);
        } else {
            Compass.nudge('drift', 10);
        }
        Compass.recordBeat('act14_choose');
    }

    function sealCovenant(sincere) {
        if (sincere) {
            Compass.nudge('fidelity', 5);
        } else {
            Compass.nudge('hypocrisy', 5);
        }
        Compass.recordBeat('act14_seal');
    }

    return { teachCommands, chooseLife, sealCovenant };
})();
window.Act14Beats = Act14Beats;
