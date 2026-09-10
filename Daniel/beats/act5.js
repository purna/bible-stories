/**
 * BEATS/ACT5.JS — The Den (Lions)
 * Input type: pray / deliverance
 */

const Act5Beats = (function () {

    function prayOpenly(defiant) {
        if (defiant) {
            Compass.nudge('faithfulness', 10);
        } else {
            Compass.nudge('compromise', 10);
        }
        Compass.recordBeat('act5_pray');
    }

    function trustInDen(peaceful) {
        if (peaceful) {
            Compass.nudge('peace', 10);
        } else {
            Compass.nudge('anxiety', 10);
        }
        Compass.recordBeat('act5_trust');
    }

    function lionsShutMouths(witnessed) {
        if (witnessed) {
            Compass.nudge('testimony', 5);
        } else {
            Compass.nudge('silence', 5);
        }
        Compass.recordBeat('act5_lions');
    }

    return { prayOpenly, trustInDen, lionsShutMouths };
})();
window.Act5Beats = Act5Beats;