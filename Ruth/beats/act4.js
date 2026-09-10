/**
 * BEATS/ACT4.JS — Boaz Notices
 * Input type: protection / favor
 */

const Act4Beats = (function () {

    function offerWater(caring) {
        if (caring) {
            Compass.nudge('care', 5);
        } else {
            Compass.nudge('indifference', 5);
        }
        Compass.recordBeat('act4_water');
    }

    function instructWorkers(protective) {
        if (protective) {
            Compass.nudge('justice', 5);
        } else {
            Compass.nudge('exploitation', 5);
        }
        Compass.recordBeat('act4_instruct');
    }

    function noticeDiligence(observant) {
        if (observant) {
            Compass.nudge('recognition', 5);
        } else {
            Compass.nudge('overlook', 5);
        }
        Compass.recordBeat('act4_notice');
    }

    return { offerWater, instructWorkers, noticeDiligence };
})();
window.Act4Beats = Act4Beats;