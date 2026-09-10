/**
 * BEATS/ACT2.JS — Goliath
 * Input type: timing / courage
 */

const Act2Beats = (function () {

    function refuseArmor(wise) {
        if (wise) {
            Compass.nudge('wisdom', 8);
        } else {
            Compass.nudge('presumption', 8);
        }
        Compass.recordBeat('act2_armor');
    }

    function timeSling(courageous) {
        if (courageous) {
            Compass.nudge('courage', 10);
        } else {
            Compass.nudge('fear', 10);
        }
        Compass.recordBeat('act2_sling');
    }

    function claimVictory(givesGlory) {
        if (givesGlory) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('self-glory', 5);
        }
        Compass.recordBeat('act2_victory');
    }

    return { refuseArmor, timeSling, claimVictory };
})();
window.Act2Beats = Act2Beats;