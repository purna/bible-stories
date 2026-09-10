/**
 * BEATS/ACT1.JS — Anointed
 * Input type: discernment / calling
 */

const Act1Beats = (function () {

    function watchSamuel(attentive) {
        if (attentive) {
            Compass.nudge('wisdom', 5);
        } else {
            Compass.nudge('haste', 5);
        }
        Compass.recordBeat('act1_samuel');
    }

    function examineSons(discerning) {
        if (discerning) {
            Compass.nudge('insight', 8);
        } else {
            Compass.nudge('superficial', 8);
        }
        Compass.recordBeat('act1_sons');
    }

    function anointDavid(willing) {
        if (willing) {
            Compass.nudge('obedience', 10);
        } else {
            Compass.nudge('resistance', 10);
        }
        Compass.recordBeat('act1_anoint');
    }

    return { watchSamuel, examineSons, anointDavid };
})();
window.Act1Beats = Act1Beats;