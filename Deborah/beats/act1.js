/**
 * BEATS/ACT1.JS — Under the Palm
 * Input type: choice / dialogue
 */

const Act1Beats = (function () {

    function hearDispute(chooseFairly) {
        if (chooseFairly) {
            Compass.nudge('wisdom', 5);
        } else {
            Compass.nudge('haste', 5);
        }
        Compass.recordBeat('act1_dispute');
    }

    function offerCounsel(peacefulPath) {
        if (peacefulPath) {
            Compass.nudge('peace', 5);
        } else {
            Compass.nudge('conflict', 5);
        }
        Compass.recordBeat('act1_counsel');
    }

    function sitUnderPalm() {
        Compass.nudge('stillness', 5);
        Compass.recordBeat('act1_palm');
    }

    return { hearDispute, offerCounsel, sitUnderPalm };
})();
window.Act1Beats = Act1Beats;