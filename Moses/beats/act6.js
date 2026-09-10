/**
 * BEATS/ACT6.JS — Bread in the Wilderness
 * Input type: daily trust / contentment
 */

const Act6Beats = (function () {

    function gatherManna(daily) {
        if (daily) {
            Compass.nudge('trust', 8);
        } else {
            Compass.nudge('hoarding', 8);
        }
        Compass.recordBeat('act6_gather');
    }

    function restSabbath(obedient) {
        if (obedient) {
            Compass.nudge('rest', 5);
        } else {
            Compass.nudge('striving', 5);
        }
        Compass.recordBeat('act6_sabbath');
    }

    function testWater(trusting) {
        if (trusting) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('grumbling', 5);
        }
        Compass.recordBeat('act6_water');
    }

    return { gatherManna, restSabbath, testWater };
})();
window.Act6Beats = Act6Beats;