/**
 * BEATS/ACT8.JS — Jethro's Advice and Sinai Arrival
 * Input type: counsel / humility
 */

const Act8Beats = (function () {

    function welcomeJethro(gracious) {
        if (gracious) {
            Compass.nudge('hospitality', 5);
        } else {
            Compass.nudge('pride', 5);
        }
        Compass.recordBeat('act8_welcome');
    }

    function delegateJudges(humble) {
        if (humble) {
            Compass.nudge('wisdom', 10);
        } else {
            Compass.nudge('burnout', 10);
        }
        Compass.recordBeat('act8_judges');
    }

    function reachSinai(expectant) {
        if (expectant) {
            Compass.nudge('anticipation', 5);
        } else {
            Compass.nudge('indifference', 5);
        }
        Compass.recordBeat('act8_arrive');
    }

    return { welcomeJethro, delegateJudges, reachSinai };
})();
window.Act8Beats = Act8Beats;
