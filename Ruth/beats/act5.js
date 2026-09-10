/**
 * BEATS/ACT5.JS — At the Threshing Floor
 * Input type: boldness / restraint
 */

const Act5Beats = (function () {

    function uncoverFeet(respectful) {
        if (respectful) {
            Compass.nudge('boldness', 8);
        } else {
            Compass.nudge('presumption', 8);
        }
        Compass.recordBeat('act5_uncover');
    }

    function requestRedemption(clear) {
        if (clear) {
            Compass.nudge('integrity', 5);
        } else {
            Compass.nudge('ambiguity', 5);
        }
        Compass.recordBeat('act5_request');
    }

    function receiveGrain(generousMeasure) {
        if (generousMeasure) {
            Compass.nudge('abundance', 5);
        } else {
            Compass.nudge('meager', 5);
        }
        Compass.recordBeat('act5_grain');
    }

    return { uncoverFeet, requestRedemption, receiveGrain };
})();
window.Act5Beats = Act5Beats;