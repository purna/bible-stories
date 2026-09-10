/**
 * BEATS/ACT9.JS — Forty Years
 * Input type: endurance / trust
 */

const Act9Beats = (function () {

    function followCloud(led) {
        if (led) {
            Compass.nudge('guidance', 5);
        } else {
            Compass.nudge('wandering', 5);
        }
        Compass.recordBeat('act9_cloud');
    }

    function strikeRock(obedient) {
        if (obedient) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('presumption', 5);
        }
        Compass.recordBeat('act9_rock');
    }

    function bronzeSerpent(lookUp) {
        if (lookUp) {
            Compass.nudge('healing', 10);
        } else {
            Compass.nudge('death', 10);
        }
        Compass.recordBeat('act9_serpent');
    }

    return { followCloud, strikeRock, bronzeSerpent };
})();
window.Act9Beats = Act9Beats;