/**
 * BEATS/ACT5.JS — Sisera Flees
 * Input type: tracking / pursuit
 */

const Act5Beats = (function () {

    function trackCommander(persistent) {
        if (persistent) {
            Compass.nudge('diligence', 5);
        } else {
            Compass.nudge('neglect', 5);
        }
        Compass.recordBeat('act5_track');
    }

    function findTent(discerning) {
        if (discerning) {
            Compass.nudge('insight', 5);
        } else {
            Compass.nudge('haste', 5);
        }
        Compass.recordBeat('act5_tent');
    }

    function confrontFoe(measured) {
        if (measured) {
            Compass.nudge('justice', 5);
        } else {
            Compass.nudge('vengeance', 5);
        }
        Compass.recordBeat('act5_confront');
    }

    return { trackCommander, findTent, confrontFoe };
})();
window.Act5Beats = Act5Beats;