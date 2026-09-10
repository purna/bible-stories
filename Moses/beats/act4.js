/**
 * BEATS/ACT4.JS — Passover Night
 * Input type: preparation / obedience
 */

const Act4Beats = (function () {

    function markDoorway(precise) {
        if (precise) {
            Compass.nudge('obedience', 10);
        } else {
            Compass.nudge('negligence', 10);
        }
        Compass.recordBeat('act4_mark');
    }

    function eatReady(alert) {
        if (alert) {
            Compass.nudge('readiness', 5);
        } else {
            Compass.nudge('complacency', 5);
        }
        Compass.recordBeat('act4_eat');
    }

    function departSwiftly(trusting) {
        if (trusting) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('hesitation', 5);
        }
        Compass.recordBeat('act4_depart');
    }

    return { markDoorway, eatReady, departSwiftly };
})();
window.Act4Beats = Act4Beats;