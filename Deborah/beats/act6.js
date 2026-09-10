/**
 * BEATS/ACT6.JS — Jael's Choice
 * Input type: decisive action / protection
 */

const Act6Beats = (function () {

    function offerHospitality(genuine) {
        if (genuine) {
            Compass.nudge('courage', 10);
        } else {
            Compass.nudge('deception', 10);
        }
        Compass.recordBeat('act6_hospitality');
    }

    function drivePeg(resolute) {
        if (resolute) {
            Compass.nudge('decisiveness', 10);
        } else {
            Compass.nudge('hesitation', 10);
        }
        Compass.recordBeat('act6_peg');
    }

    function protectCamp(vigilant) {
        if (vigilant) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('negligence', 5);
        }
        Compass.recordBeat('act6_protect');
    }

    return { offerHospitality, drivePeg, protectCamp };
})();
window.Act6Beats = Act6Beats;