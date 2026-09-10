/**
 * BEATS/ACT3.JS — Mount Carmel
 * Input type: stand / fire
 */

const Act3Beats = (function () {

    function repairAltar(thorough) {
        if (thorough) {
            Compass.nudge('obedience', 8);
        } else {
            Compass.nudge('haste', 8);
        }
        Compass.recordBeat('act3_altar');
    }

    function callFire(bold) {
        if (bold) {
            Compass.nudge('courage', 10);
        } else {
            Compass.nudge('fear', 10);
        }
        Compass.recordBeat('act3_fire');
    }

    function peopleReturn(witnessed) {
        if (witnessed) {
            Compass.nudge('revival', 5);
        } else {
            Compass.nudge('indifference', 5);
        }
        Compass.recordBeat('act3_return');
    }

    return { repairAltar, callFire, peopleReturn };
})();
window.Act3Beats = Act3Beats;