/**
 * BEATS/ACT3.JS — Gleaning
 * Input type: work / humility
 */

const Act3Beats = (function () {

    function gatherStalks(diligent) {
        if (diligent) {
            Compass.nudge('diligence', 5);
        } else {
            Compass.nudge('idleness', 5);
        }
        Compass.recordBeat('act3_gather');
    }

    function acceptGenerosity(grateful) {
        if (grateful) {
            Compass.nudge('gratitude', 5);
        } else {
            Compass.nudge('entitlement', 5);
        }
        Compass.recordBeat('act3_accept');
    }

    function honorNaomi(respectful) {
        if (respectful) {
            Compass.nudge('honor', 5);
        } else {
            Compass.nudge('neglect', 5);
        }
        Compass.recordBeat('act3_naomi');
    }

    return { gatherStalks, acceptGenerosity, honorNaomi };
})();
window.Act3Beats = Act3Beats;