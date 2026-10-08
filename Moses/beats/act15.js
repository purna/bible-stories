/**
 * BEATS/ACT15.JS — Mount Nebo: Viewing the Promised Land
 * Input type: succession / vision
 */

const Act15Beats = (function () {

    function appointJoshua(confident) {
        if (confident) {
            Compass.nudge('succession', 10);
        } else {
            Compass.nudge('uncertainty', 10);
        }
        Compass.recordBeat('act15_joshua');
    }

    function viewLand(hopeful) {
        if (hopeful) {
            Compass.nudge('promise', 8);
        } else {
            Compass.nudge('loss', 8);
        }
        Compass.recordBeat('act15_view');
    }

    function blessPeople(generous) {
        if (generous) {
            Compass.nudge('blessing', 10);
        } else {
            Compass.nudge('resentment', 10);
        }
        Compass.recordBeat('act15_bless');
    }

    return { appointJoshua, viewLand, blessPeople };
})();
window.Act15Beats = Act15Beats;
