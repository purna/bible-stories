/**
 * BEATS/ACT1.JS — The Child in the River
 * Input type: protection / trust
 */

const Act1Beats = (function () {

    function placeBasket(secure) {
        if (secure) {
            Compass.nudge('care', 5);
        } else {
            Compass.nudge('risk', 5);
        }
        Compass.recordBeat('act1_basket');
    }

    function watchReeds(vigilant) {
        if (vigilant) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('distraction', 5);
        }
        Compass.recordBeat('act1_reeds');
    }

    function princessFinds(compassion) {
        if (compassion) {
            Compass.nudge('mercy', 5);
        } else {
            Compass.nudge('apathy', 5);
        }
        Compass.recordBeat('act1_princess');
    }

    return { placeBasket, watchReeds, princessFinds };
})();
window.Act1Beats = Act1Beats;