/**
 * BEATS/ACT13.JS — Wilderness Trials: Water, Serpents, and Balak
 * Input type: endurance / trust
 */

const Act13Beats = (function () {

    function followCloud(led) {
        if (led) {
            Compass.nudge('guidance', 5);
        } else {
            Compass.nudge('wandering', 5);
        }
        Compass.recordBeat('act13_cloud');
    }

    function strikeRock(obedient) {
        if (obedient) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('presumption', 5);
        }
        Compass.recordBeat('act13_rock');
    }

    function bronzeSerpent(lookUp) {
        if (lookUp) {
            Compass.nudge('healing', 10);
        } else {
            Compass.nudge('death', 10);
        }
        Compass.recordBeat('act13_serpent');
    }

    function refuseCurse(discerning) {
        if (discerning) {
            Compass.nudge('blessing', 8);
        } else {
            Compass.nudge('compromise', 8);
        }
        Compass.recordBeat('act13_balak');
    }

    return { followCloud, strikeRock, bronzeSerpent, refuseCurse };
})();
window.Act13Beats = Act13Beats;
