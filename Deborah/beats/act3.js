/**
 * BEATS/ACT3.JS — Gather at Tabor
 * Input type: rally / stealth
 */

const Act3Beats = (function () {

    function summonTribes(inclusive) {
        if (inclusive) {
            Compass.nudge('unity', 8);
        } else {
            Compass.nudge('division', 8);
        }
        Compass.recordBeat('act3_summon');
    }

    function avoidSisera(cautious) {
        if (cautious) {
            Compass.nudge('wisdom', 5);
        } else {
            Compass.nudge('reckless', 5);
        }
        Compass.recordBeat('act3_avoid');
    }

    function arriveTabor(ready) {
        Compass.nudge('preparation', 5);
        Compass.recordBeat('act3_tabor');
    }

    return { summonTribes, avoidSisera, arriveTabor };
})();
window.Act3Beats = Act3Beats;