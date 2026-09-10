/**
 * BEATS/ACT5.JS — The Still, Small Voice
 * Input type: listen / discern
 */

const Act5Beats = (function () {

    function enterCave(sheltered) {
        if (sheltered) {
            Compass.nudge('safety', 5);
        } else {
            Compass.nudge('exposure', 5);
        }
        Compass.recordBeat('act5_cave');
    }

    function discernVoice(listening) {
        if (listening) {
            Compass.nudge('wisdom', 10);
        } else {
            Compass.nudge('noise', 10);
        }
        Compass.recordBeat('act5_voice');
    }

    function receiveCommission(willing) {
        if (willing) {
            Compass.nudge('obedience', 8);
        } else {
            Compass.nudge('resistance', 8);
        }
        Compass.recordBeat('act5_commission');
    }

    return { enterCave, discernVoice, receiveCommission };
})();
window.Act5Beats = Act5Beats;