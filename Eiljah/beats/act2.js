/**
 * BEATS/ACT2.JS — The Widow of Zarephath
 * Input type: provision / faith
 */

const Act2Beats = (function () {

    function askForWater(humble) {
        if (humble) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('pride', 5);
        }
        Compass.recordBeat('act2_water');
    }

    function shareFlourOil(generous) {
        if (generous) {
            Compass.nudge('faithfulness', 8);
        } else {
            Compass.nudge('hoarding', 8);
        }
        Compass.recordBeat('act2_share');
    }

    function miracleContinues(trusting) {
        if (trusting) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('anxiety', 5);
        }
        Compass.recordBeat('act2_miracle');
    }

    return { askForWater, shareFlourOil, miracleContinues };
})();
window.Act2Beats = Act2Beats;