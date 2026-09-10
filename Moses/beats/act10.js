/**
 * BEATS/ACT10.JS — Mount Nebo
 * Input type: succession / vision
 */

const Act10Beats = (function () {

    function appointJoshua(confident) {
        if (confident) {
            Compass.nudge('succession', 10);
        } else {
            Compass.nudge('uncertainty', 10);
        }
        Compass.recordBeat('act10_joshua');
    }

    function viewLand(hopeful) {
        if (hopeful) {
            Compass.nudge('promise', 8);
        } else {
            Compass.nudge('loss', 8);
        }
        Compass.recordBeat('act10_view');
    }

    function blessPeople(generous) {
        if (generous) {
            Compass.nudge('blessing', 10);
        } else {
            Compass.nudge('resentment', 10);
        }
        Compass.recordBeat('act10_bless');
    }

    return { appointJoshua, viewLand, blessPeople };
})();
window.Act10Beats = Act10Beats;