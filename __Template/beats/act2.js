/**
 * BEATS/ACT2.JS — Decision / Core Action
 * Template beat file — customize for your story
 * Input type: action / courage
 */

const Act2Beats = (function () {

    function takeStep(courageous) {
        if (courageous) {
            Compass.nudge('courage', 8);
        } else {
            Compass.nudge('fear', 8);
        }
        Compass.recordBeat('act2_step');
    }

    function respondToCall(willing) {
        if (willing) {
            Compass.nudge('obedience', 5);
        } else {
            Compass.nudge('resistance', 5);
        }
        Compass.recordBeat('act2_respond');
    }

    function faceChallenge(steadfast) {
        if (steadfast) {
            Compass.nudge('endurance', 5);
        } else {
            Compass.nudge('compromise', 5);
        }
        Compass.recordBeat('act2_challenge');
    }

    return { takeStep, respondToCall, faceChallenge };
})();
window.Act2Beats = Act2Beats;