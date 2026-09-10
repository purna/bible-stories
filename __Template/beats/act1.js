/**
 * BEATS/ACT1.JS — Opening / Establishing
 * Template beat file — customize for your story
 * Input type: choice / dialogue
 */

const Act1Beats = (function () {

    function makeChoice(chooseWisely) {
        if (chooseWisely) {
            Compass.nudge('wisdom', 5);
        } else {
            Compass.nudge('haste', 5);
        }
        Compass.recordBeat('act1_choice');
    }

    function observeScene(attentive) {
        if (attentive) {
            Compass.nudge('awareness', 5);
        } else {
            Compass.nudge('oversight', 5);
        }
        Compass.recordBeat('act1_observe');
    }

    function establishSetting(grounded) {
        if (grounded) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('doubt', 5);
        }
        Compass.recordBeat('act1_establish');
    }

    return { makeChoice, observeScene, establishSetting };
})();
window.Act1Beats = Act1Beats;