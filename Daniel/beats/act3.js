/**
 * BEATS/ACT3.JS — The Furnace
 * Input type: stand / deliverance
 */

const Act3Beats = (function () {

    function refuseBow(steadfast) {
        if (steadfast) {
            Compass.nudge('courage', 10);
        } else {
            Compass.nudge('fear', 10);
        }
        Compass.recordBeat('act3_refuse');
    }

    function walkInFire(trusting) {
        if (trusting) {
            Compass.nudge('deliverance', 10);
        } else {
            Compass.nudge('presumption', 10);
        }
        Compass.recordBeat('act3_walk');
    }

    function fourthManSeen(recognized) {
        if (recognized) {
            Compass.nudge('wonder', 5);
        } else {
            Compass.nudge('missed', 5);
        }
        Compass.recordBeat('act3_fourth');
    }

    return { refuseBow, walkInFire, fourthManSeen };
})();
window.Act3Beats = Act3Beats;