/**
 * BEATS/ACT7.JS — The Chariot of Fire
 * Input type: ascend / succession
 */

const Act7Beats = (function () {

    function crossJordan(faithful) {
        if (faithful) {
            Compass.nudge('trust', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act7_jordan');
    }

    function requestDoublePortion(spiritual) {
        if (spiritual) {
            Compass.nudge('hunger', 5);
        } else {
            Compass.nudge('ambition', 5);
        }
        Compass.recordBeat('act7_request');
    }

    function chariotAppears(witnessed) {
        if (witnessed) {
            Compass.nudge('glory', 10);
        } else {
            Compass.nudge('missing', 10);
        }
        Compass.recordBeat('act7_chariot');
    }

    return { crossJordan, requestDoublePortion, chariotAppears };
})();
window.Act7Beats = Act7Beats;