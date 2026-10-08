/**
 * BEATS/ACT11.JS — Second Tablets and Tabernacle
 * Input type: renewal / worship
 */

const Act11Beats = (function () {

    function cutSecondTablets(patient) {
        if (patient) {
            Compass.nudge('restoration', 8);
        } else {
            Compass.nudge('impatience', 8);
        }
        Compass.recordBeat('act11_tablets2');
    }

    function giveOfferings(willing) {
        if (willing) {
            Compass.nudge('generosity', 5);
        } else {
            Compass.nudge('stinginess', 5);
        }
        Compass.recordBeat('act11_offerings');
    }

    function raiseTabernacle(careful) {
        if (careful) {
            Compass.nudge('faithfulness', 10);
        } else {
            Compass.nudge('carelessness', 10);
        }
        Compass.recordBeat('act11_tabernacle');
    }

    return { cutSecondTablets, giveOfferings, raiseTabernacle };
})();
window.Act11Beats = Act11Beats;
