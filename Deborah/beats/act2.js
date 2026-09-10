/**
 * BEATS/ACT2.JS — The Summons
 * Input type: message delivery / courage
 */

const Act2Beats = (function () {

    function carryMessage(steadyPace) {
        if (steadyPace) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('fear', 5);
        }
        Compass.recordBeat('act2_carry');
    }

    function approachBarak(respectful) {
        if (respectful) {
            Compass.nudge('respect', 5);
        } else {
            Compass.nudge('abrasive', 5);
        }
        Compass.recordBeat('act2_barak');
    }

    function promisePresence(goTogether) {
        if (goTogether) {
            Compass.nudge('unity', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act2_promise');
    }

    return { carryMessage, approachBarak, promisePresence };
})();
window.Act2Beats = Act2Beats;