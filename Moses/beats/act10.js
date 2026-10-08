/**
 * BEATS/ACT10.JS — The Golden Calf
 * Input type: intercession / justice
 */

const Act10Beats = (function () {

    function confrontIdol(zealous) {
        if (zealous) {
            Compass.nudge('zeal', 8);
        } else {
            Compass.nudge('tolerance', 8);
        }
        Compass.recordBeat('act10_confront');
    }

    function intercede(compassionate) {
        if (compassionate) {
            Compass.nudge('mercy', 10);
        } else {
            Compass.nudge('wrath', 10);
        }
        Compass.recordBeat('act10_intercede');
    }

    function renewCovenant(faithful) {
        if (faithful) {
            Compass.nudge('restoration', 8);
        } else {
            Compass.nudge('abandonment', 8);
        }
        Compass.recordBeat('act10_renew');
    }

    return { confrontIdol, intercede, renewCovenant };
})();
window.Act10Beats = Act10Beats;
