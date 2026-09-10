/**
 * BEATS/ACT2.JS — Your People
 * Input type: journey / companionship
 */

const Act2Beats = (function () {

    function walkTogether(patientPace) {
        if (patientPace) {
            Compass.nudge('kindness', 5);
        } else {
            Compass.nudge('haste', 5);
        }
        Compass.recordBeat('act2_walk');
    }

    function shareBread(generous) {
        if (generous) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('scarcity', 5);
        }
        Compass.recordBeat('act2_bread');
    }

    function arriveBethlehem(humble) {
        if (humble) {
            Compass.nudge('grace', 5);
        } else {
            Compass.nudge('pride', 5);
        }
        Compass.recordBeat('act2_arrive');
    }

    return { walkTogether, shareBread, arriveBethlehem };
})();
window.Act2Beats = Act2Beats;