const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('stateManager.js', 'utf8')
    + '\n' + fs.readFileSync('decisionLog.js', 'utf8')
    + '\n' + fs.readFileSync('visionEngine.js', 'utf8');

// Expose IIFE globals to the test scope
const patched = code.replace(
    /const (StateManager|DecisionLog|VisionEngine) =/g,
    'global.$1 ='
);
vm.runInThisContext(patched);

const SM = global.StateManager;
const DL = global.DecisionLog;
const VE = global.VisionEngine;

let passed = 0;
let failed = 0;
function check(name, cond) {
    if (cond) { passed++; console.log('  PASS: ' + name); }
    else { failed++; console.log('  FAIL: ' + name); }
}

// ─── State Manager ───
console.log('\n=== State Manager ===');
const initial = SM.getMeters();
check('initial meters are 0/0/100', initial.setApart === 0 && initial.fitIn === 0 && initial.discernment === 100);

SM.incrementMeters({ setApart: 5, fitIn: 2 });
const after = SM.getMeters();
check('setApart incremented to 5', after.setApart === 5);
check('fitIn incremented to 2', after.fitIn === 2);

SM.adjustReign('nebuchadnezzar', { suspicion: 10, favor: -5 });
const reign = SM.getReign('nebuchadnezzar');
check('nebuchadnezzar suspicion is 10', reign.suspicion === 10);
check('nebuchadnezzar favor is 45 (clamped)', reign.favor === 45);

SM.write('test_flag', true, 1, ['test:tag']);
check('state flag recorded', SM.read('test_flag') === true);

// ─── Decision Log ───
console.log('\n=== Decision Log ===');
DL.record({ id: 'table_test', tags: ['loyalty:diplomatic', 'cost:private'] });
DL.record({ id: 'statue_plain', tags: ['loyalty:god', 'cost:public'] });
check('has loyalty:god tag', DL.hasTag('loyalty:god'));
check('has loyalty:diplomatic tag', DL.hasTag('loyalty:diplomatic'));
check('made statue_plain', DL.made('statue_plain'));
check('did not make den_pray', !DL.made('den_pray'));

// Test epilogue resolution logic (replicates resolveLine in daniel-comic.js)
function getEpilogueKey() {
    const god = DL.hasTag('loyalty:god');
    const diplomatic = DL.hasTag('loyalty:diplomatic');
    if (god && !diplomatic) return 'god_only';
    if (god && diplomatic) return 'mixed';
    if (diplomatic) return 'compromised';
    return 'default';
}
check('epilogue resolves to mixed', getEpilogueKey() === 'mixed');

// ─── Vision Engine ───
console.log('\n=== Vision Engine ===');
const scene = {
    id: 'statue_dream', chapter: 1,
    fragments: [
        { id: 'gold', meaning: 'gold', isDecoy: false },
        { id: 'silver', meaning: 'silver', isDecoy: false },
        { id: 'clay', meaning: 'clay', isDecoy: false },
        { id: 'shadow', meaning: 'decoy', isDecoy: true }
    ],
    riskTimerSeconds: 60, stakesText: 'Test'
};
check('scene loaded', VE.loadScene(scene) === undefined);
check('start returns true', VE.start() === true);
check('isRunning true', VE.isRunning() === true);

VE.collect('gold');
VE.collect('silver');
VE.collect('clay');
check('gathered 3 fragments', VE.getGathered().length === 3);
check('total non-decoy is 3', VE.totalCount() === 3);
check('can deliver', VE.canDeliver() === true);

const accurate = VE.deliver('plain');
check('plain delivery is accurate', accurate === true);
const metrics = SM.getMeters();
check('discernment did not decrease below 100', metrics.discernment >= 100);
check('decision recorded in log', DL.made('vision_statue_dream_plain'));

// Test softened delivery
VE.start();
VE.collect('gold');
VE.collect('silver');
VE.collect('clay');
VE.deliver('softened');
const m2 = SM.getMeters();
console.log('  After softened: discernment=' + m2.discernment);

// Test save/load round-trip
console.log('\n=== Save/Load ===');
const saved = SM.serialize();
const savedDecisions = DL.serialize();
check('serialize produces string', typeof saved === 'string');
check('decision serialize produces string', typeof savedDecisions === 'string');

SM.reset();
DL.reset();
check('after reset setApart is 0', SM.getMeters().setApart === 0);
check('after reset no decisions', DL.getLog().length === 0);

SM.deserialize(saved);
DL.deserialize(savedDecisions);
const restored = SM.getMeters();
check('restored setApart is 5', restored.setApart === 5);
check('restored decisions', DL.getLog().length >= 4);

console.log('\n========================================');
console.log('Results: ' + passed + ' passed, ' + failed + ' failed');
console.log('========================================');
process.exit(failed > 0 ? 1 : 0);
