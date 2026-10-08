/**
 * BEATS/ACT9.JS — Sinai: The Covenant Given
 * Input type: covenant / reverence
 */

const Act9Beats = (function () {

    function approachMountain(reverent) {
        if (reverent) {
            Compass.nudge('awe', 10);
        } else {
            Compass.nudge('casual', 10);
        }
        Compass.recordBeat('act9_mountain');
    }

    function receiveTablets(attentive) {
        if (attentive) {
            Compass.nudge('revelation', 8);
        } else {
            Compass.nudge('distraction', 8);
        }
        Compass.recordBeat('act9_tablets');
    }

    function covenantPromise(solemn) {
        if (solemn) {
            Compass.nudge('commitment', 10);
        } else {
            Compass.nudge('lip-service', 10);
        }
        Compass.recordBeat('act9_covenant');
    }

    return { approachMountain, receiveTablets, covenantPromise };
})();
window.Act9Beats = Act9Beats;
