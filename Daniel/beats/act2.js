/**
 * BEATS/ACT2.JS — The Dream (Statue)
 * Input type: revelation / interpretation
 */

const Act2Beats = (function () {

    function interpretDream(humble) {
        if (humble) {
            Compass.nudge('wisdom', 10);
        } else {
            Compass.nudge('pride', 10);
        }
        Compass.recordBeat('act2_interpret');
    }

    function acknowledgeGod(givesGlory) {
        if (givesGlory) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('self-glory', 5);
        }
        Compass.recordBeat('act2_acknowledge');
    }

    function predictKingdoms(accurate) {
        if (accurate) {
            Compass.nudge('revelation', 5);
        } else {
            Compass.nudge('confusion', 5);
        }
        Compass.recordBeat('act2_predict');
    }

    return { interpretDream, acknowledgeGod, predictKingdoms };
})();
window.Act2Beats = Act2Beats;