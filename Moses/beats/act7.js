/**
 * BEATS/ACT7.JS — Water from Rock and Victory
 * Input type: provision / dependence
 */

const Act7Beats = (function () {

    function waitForWater(patient) {
        if (patient) {
            Compass.nudge('patience', 5);
        } else {
            Compass.nudge('quarreling', 5);
        }
        Compass.recordBeat('act7_wait');
    }

    function strikeRock(obedient) {
        if (obedient) {
            Compass.nudge('provision', 8);
        } else {
            Compass.nudge('presumption', 8);
        }
        Compass.recordBeat('act7_rock');
    }

    function upholdHands(steadfast) {
        if (steadfast) {
            Compass.nudge('perseverance', 10);
        } else {
            Compass.nudge('weariness', 10);
        }
        Compass.recordBeat('act7_hands');
    }

    return { waitForWater, strikeRock, upholdHands };
})();
window.Act7Beats = Act7Beats;
