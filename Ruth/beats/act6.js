/**
 * BEATS/ACT6.JS — At the Gate
 * Input type: witness / legal process
 */

const Act6Beats = (function () {

    function summonWitnesses(thorough) {
        if (thorough) {
            Compass.nudge('order', 5);
        } else {
            Compass.nudge('hasty', 5);
        }
        Compass.recordBeat('act6_witnesses');
    }

    function offerSandal(willing) {
        if (willing) {
            Compass.nudge('release', 5);
        } else {
            Compass.nudge('grasp', 5);
        }
        Compass.recordBeat('act6_sandal');
    }

    function blessUnion(heartfelt) {
        if (heartfelt) {
            Compass.nudge('blessing', 5);
        } else {
            Compass.nudge('formality', 5);
        }
        Compass.recordBeat('act6_bless');
    }

    return { summonWitnesses, offerSandal, blessUnion };
})();
window.Act6Beats = Act6Beats;