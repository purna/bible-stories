/**
 * BEATS/ACT12.JS — The Spies and Rebellion
 * Input type: courage / unbelief
 */

const Act12Beats = (function () {

    function exploreCanaan(observant) {
        if (observant) {
            Compass.nudge('discernment', 5);
        } else {
            Compass.nudge('naivety', 5);
        }
        Compass.recordBeat('act12_explore');
    }

    function giveReport(faithful) {
        if (faithful) {
            Compass.nudge('faith', 10);
        } else {
            Compass.nudge('fear', 10);
        }
        Compass.recordBeat('act12_report');
    }

    function faceConsequences(accepting) {
        if (accepting) {
            Compass.nudge('humility', 8);
        } else {
            Compass.nudge('rebellion', 8);
        }
        Compass.recordBeat('act12_consequences');
    }

    return { exploreCanaan, giveReport, faceConsequences };
})();
window.Act12Beats = Act12Beats;
