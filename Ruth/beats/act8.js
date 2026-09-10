/**
 * BEATS/ACT8.JS — Obed
 * Input type: legacy / genealogy
 */

const Act8Beats = (function () {

    function nameChild(hopeful) {
        if (hopeful) {
            Compass.nudge('future', 5);
        } else {
            Compass.nudge('memory', 5);
        }
        Compass.recordBeat('act8_name');
    }

    function recordLineage(accurate) {
        if (accurate) {
            Compass.nudge('faithfulness', 5);
        } else {
            Compass.nudge('omission', 5);
        }
        Compass.recordBeat('act8_lineage');
    }

    function seeDavid(foresight) {
        if (foresight) {
            Compass.nudge('promise', 10);
        } else {
            Compass.nudge('present', 10);
        }
        Compass.recordBeat('act8_david');
    }

    return { nameChild, recordLineage, seeDavid };
})();
window.Act8Beats = Act8Beats;