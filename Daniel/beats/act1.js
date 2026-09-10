/**
 * BEATS/ACT1.JS — The King's Table
 * Input type: choice / integrity
 */

const Act1Beats = (function () {

    function chooseDiet(faithful) {
        if (faithful) {
            Compass.nudge('conviction', 10);
        } else {
            Compass.nudge('compromise', 10);
        }
        Compass.recordBeat('act1_diet');
    }

    function tenDayTest(trusting) {
        if (trusting) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act1_test');
    }

    function excelInWisdom(diligent) {
        if (diligent) {
            Compass.nudge('excellence', 5);
        } else {
            Compass.nudge('mediocrity', 5);
        }
        Compass.recordBeat('act1_excel');
    }

    return { chooseDiet, tenDayTest, excelInWisdom };
})();
window.Act1Beats = Act1Beats;