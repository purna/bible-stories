/**
 * BEATS/ACT4.JS — The Writing on the Wall
 * Input type: read / rebuke
 */

const Act4Beats = (function () {

    function readWriting(grantedInsight) {
        if (grantedInsight) {
            Compass.nudge('discernment', 10);
        } else {
            Compass.nudge('blindness', 10);
        }
        Compass.recordBeat('act4_read');
    }

    function rebukeKing(bold) {
        if (bold) {
            Compass.nudge('boldness', 8);
        } else {
            Compass.nudge('timidity', 8);
        }
        Compass.recordBeat('act4_rebuke');
    }

    function kingdomDivided(accepted) {
        if (accepted) {
            Compass.nudge('sovereignty', 5);
        } else {
            Compass.nudge('resistance', 5);
        }
        Compass.recordBeat('act4_divided');
    }

    return { readWriting, rebukeKing, kingdomDivided };
})();
window.Act4Beats = Act4Beats;