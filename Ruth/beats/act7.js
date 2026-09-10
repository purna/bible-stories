/**
 * BEATS/ACT7.JS — Redeemed
 * Input type: covenant / household
 */

const Act7Beats = (function () {

    function transferSandal(solemn) {
        if (solemn) {
            Compass.nudge('covenant', 10);
        } else {
            Compass.nudge('transaction', 10);
        }
        Compass.recordBeat('act7_transfer');
    }

    function joinHouseholds(unified) {
        if (unified) {
            Compass.nudge('belonging', 5);
        } else {
            Compass.nudge('division', 5);
        }
        Compass.recordBeat('act7_join');
    }

    function welcomeRuth(welcoming) {
        if (welcoming) {
            Compass.nudge('inclusion', 5);
        } else {
            Compass.nudge('exclusion', 5);
        }
        Compass.recordBeat('act7_welcome');
    }

    return { transferSandal, joinHouseholds, welcomeRuth };
})();
window.Act7Beats = Act7Beats;