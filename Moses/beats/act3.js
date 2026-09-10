/**
 * BEATS/ACT3.JS — Before the Throne
 * Input type: confrontation / signs
 */

const Act3Beats = (function () {

    function speakBoldly(courageous) {
        if (courageous) {
            Compass.nudge('boldness', 8);
        } else {
            Compass.nudge('fear', 8);
        }
        Compass.recordBeat('act3_speak');
    }

    function performSign(faithful) {
        if (faithful) {
            Compass.nudge('power', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act3_sign');
    }

    function persistThroughPlagues(steadfast) {
        if (steadfast) {
            Compass.nudge('endurance', 5);
        } else {
            Compass.nudge('compromise', 5);
        }
        Compass.recordBeat('act3_persist');
    }

    return { speakBoldly, performSign, persistThroughPlagues };
})();
window.Act3Beats = Act3Beats;