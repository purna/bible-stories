/**
 * BEATS/ACT1.JS — Leaving Moab
 * Input type: choice / loyalty
 */

const Act1Beats = (function () {

    function chooseCompanion(stayWithNaomi) {
        if (stayWithNaomi) {
            Compass.nudge('loyalty', 10);
        } else {
            Compass.nudge('separation', 10);
        }
        Compass.recordBeat('act1_choose');
    }

    function packLightly(essentialOnly) {
        if (essentialOnly) {
            Compass.nudge('faith', 5);
        } else {
            Compass.nudge('burden', 5);
        }
        Compass.recordBeat('act1_pack');
    }

    function crossBorder(trusting) {
        if (trusting) {
            Compass.nudge('hope', 5);
        } else {
            Compass.nudge('fear', 5);
        }
        Compass.recordBeat('act1_border');
    }

    return { chooseCompanion, packLightly, crossBorder };
})();
window.Act1Beats = Act1Beats;