/**
 * BEATS/ACT1.JS — The Drought
 * Input type: provision / trust
 */

const Act1Beats = (function () {

    function followRavens(attentive) {
        if (attentive) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act1_ravens');
    }

    function drinkBrook(grateful) {
        if (grateful) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('entitlement', 5);
        }
        Compass.recordBeat('act1_brook');
    }

    function waitOnGod(patient) {
        if (patient) {
            Compass.nudge('trust', 5);
        } else {
            Compass.nudge('impatience', 5);
        }
        Compass.recordBeat('act1_wait');
    }

    return { followRavens, drinkBrook, waitOnGod };
})();
window.Act1Beats = Act1Beats;