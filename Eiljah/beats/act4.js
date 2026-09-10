/**
 * BEATS/ACT4.JS — The Flight to Horeb
 * Input type: flee / sustain
 */

const Act4Beats = (function () {

    function fleeJezebel(urgent) {
        if (urgent) {
            Compass.nudge('fear', 8);
        } else {
            Compass.nudge('confidence', 8);
        }
        Compass.recordBeat('act4_flee');
    })

    function angelProvides(receptive) {
        if (receptive) {
            Compass.nudge('provision', 5);
        } else {
            Compass.nudge('rejection', 5);
        }
        Compass.recordBeat('act4_angel');
    }

    function fortyDaysJourney(sustained) {
        if (sustained) {
            Compass.nudge('endurance', 5);
        } else {
            Compass.nudge('exhaustion', 5);
        }
        Compass.recordBeat('act4_journey');
    }

    return { fleeJezebel, angelProvides, fortyDaysJourney };
})();
window.Act4Beats = Act4Beats;