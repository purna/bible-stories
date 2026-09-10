/**
 * BEATS/ACT3.JS — Saul's Court
 * Input type: listen / respond
 */

const Act3Beats = (function () {

    function playMelody(soothing) {
        if (soothing) {
            Compass.nudge('care', 5);
        } else {
            Compass.nudge('discord', 5);
        }
        Compass.recordBeat('act3_melody');
    }

    function watchMood(observant) {
        if (observant) {
            Compass.nudge('wisdom', 5);
        } else {
            Compass.nudge('oblivious', 5);
        }
        Compass.recordBeat('act3_mood');
    }

    function avoidSpear(alert) {
        if (alert) {
            Compass.nudge('courage', 5);
        } else {
            Compass.nudge('reckless', 5);
        }
        Compass.recordBeat('act3_spear');
    }

    return { playMelody, watchMood, avoidSpear };
})();
window.Act3Beats = Act3Beats;