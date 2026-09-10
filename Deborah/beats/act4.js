/**
 * BEATS/ACT4.JS — The Storm
 * Input type: timing / trust
 */

const Act4Beats = (function () {

    function signalAdvance(trustTiming) {
        if (trustTiming) {
            Compass.nudge('faith', 10);
        } else {
            Compass.nudge('impatience', 10);
        }
        Compass.recordBeat('act4_signal');
    }

    function watchRiver(riseObserved) {
        if (riseObserved) {
            Compass.nudge('awareness', 5);
        } else {
            Compass.nudge('blindness', 5);
        }
        Compass.recordBeat('act4_river');
    }

    function chariotsMire(graspProvidence) {
        if (graspProvidence) {
            Compass.nudge('trust', 10);
        } else {
            Compass.nudge('chance', 10);
        }
        Compass.recordBeat('act4_mire');
    }

    return { signalAdvance, watchRiver, chariotsMire };
})();
window.Act4Beats = Act4Beats;