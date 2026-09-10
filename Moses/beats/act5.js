/**
 * BEATS/ACT5.JS — Through the Sea
 * Input type: trust / forward movement
 */

const Act5Beats = (function () {

    function liftStaff(obedient) {
        if (obedient) {
            Compass.nudge('faith', 10);
        } else {
            Compass.nudge('doubt', 10);
        }
        Compass.recordBeat('act5_staff');
    }

    function walkPath(courageous) {
        if (courageous) {
            Compass.nudge('courage', 8);
        } else {
            Compass.nudge('fear', 8);
        }
        Compass.recordBeat('act5_walk');
    }

    function watersReturn(timely) {
        if (timely) {
            Compass.nudge('deliverance', 5);
        } else {
            Compass.nudge('delay', 5);
        }
        Compass.recordBeat('act5_return');
    }

    return { liftStaff, walkPath, watersReturn };
})();
window.Act5Beats = Act5Beats;