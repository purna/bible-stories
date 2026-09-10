/**
 * BEATS/ACT2.JS — The Burning Bush
 * Input type: encounter / calling
 */

const Act2Beats = (function () {

    function turnAside(curious) {
        if (curious) {
            Compass.nudge('attentiveness', 5);
        } else {
            Compass.nudge('passing', 5);
        }
        Compass.recordBeat('act2_turn');
    }

    function removeSandals(reverent) {
        if (reverent) {
            Compass.nudge('holiness', 10);
        } else {
            Compass.nudge('casual', 10);
        }
        Compass.recordBeat('act2_sandals');
    }

    function acceptCall(willing) {
        if (willing) {
            Compass.nudge('obedience', 10);
        } else {
            Compass.nudge('resistance', 10);
        }
        Compass.recordBeat('act2_call');
    }

    return { turnAside, removeSandals, acceptCall };
})();
window.Act2Beats = Act2Beats;