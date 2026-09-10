/**
 * BEATS/ACT6.JS — Naboth's Vineyard
 * Input type: witness / justice
 */

const Act6Beats = (function () {

    function confrontAhab(bold) {
        if (bold) {
            Compass.nudge('boldness', 8);
        } else {
            Compass.nudge('timidity', 8);
        }
        Compass.recordBeat('act6_confront');
    }

    function pronounceJudgment(just) {
        if (just) {
            Compass.nudge('righteousness', 5);
        } else {
            Compass.nudge('partiality', 5);
        }
        Compass.recordBeat('act6_judgment');
    }

    function vineyardTaken(witnessed) {
        if (witnessed) {
            Compass.nudge('testimony', 5);
        } else {
            Compass.nudge('silence', 5);
        }
        Compass.recordBeat('act6_taken');
    }

    return { confrontAhab, pronounceJudgment, vineyardTaken };
})();
window.Act6Beats = Act6Beats;