/**
 * STATEMANAGER.JS
 * The single source of truth for "what has happened."
 * An append-only log of flags + per-reign Favor/Suspicion + the
 * cross-chapter meters (Set Apart, Fit In, Discernment).
 *
 * Adapted from __docs/daniel-implementation/01-project-foundation.md.
 * Plain-JS module (no build step) to match the existing comic architecture.
 */

const StateManager = (function () {
    const CLAMP = (v, min, max) => Math.max(min, Math.min(max, v));

    const reigns = {
        nebuchadnezzar: { favor: 50, suspicion: 0 },
        belshazzar: { favor: 50, suspicion: 0 },
        darius: { favor: 50, suspicion: 0 },
    };

    // Chapter → reign mapping (lives in data per the docs, inlined here
    // for the comic's simpler structure).
    const CHAPTER_REIGN = {
        0: "nebuchadnezzar", // Ch 1: The King's Table
        1: "nebuchadnezzar", // Ch 2: The Dream
        2: null,             // Ch 3: The Furnace (Daniel absent)
        3: "belshazzar",     // Ch 5: The Writing on the Wall (in story.json)
        4: "darius",         // Ch 6: The Den
    };

    let log = [];          // append-only: { key, value, chapter, timestamp }
    let tick = 0;
    let setApart = 0;
    let fitIn = 0;
    let discernment = 100; // start confident; depletes under compromise
    let snapshots = [];

    /* ── Public API ────────────────────────────────────────────── */

    function write(key, value, chapter, tags) {
        log.push({ key, value, chapter, timestamp: tick++, tags: tags || [] });
    }

    function made(key) {
        return log.some(f => f.key === key);
    }

    function read(key) {
        for (let i = log.length - 1; i >= 0; i--) {
            if (log[i].key === key) return log[i].value;
        }
        return undefined;
    }

    function hasTag(tag) {
        return log.some(f => Array.isArray(f.tags) && f.tags.includes(tag));
    }

    function adjustReign(reign, delta) {
        if (!reigns[reign]) return;
        const s = reigns[reign];
        if (delta.favor !== undefined) s.favor = CLAMP(s.favor + delta.favor, 0, 100);
        if (delta.suspicion !== undefined) s.suspicion = CLAMP(s.suspicion + delta.suspicion, 0, 100);
    }

    function getReign(reign) {
        return reigns[reign] ? { ...reigns[reign] } : null;
    }

    function getReignForChapter(chapter) {
        return CHAPTER_REIGN[chapter] || null;
    }

    function incrementMeters(delta) {
        if (delta.setApart !== undefined) setApart += delta.setApart;
        if (delta.fitIn !== undefined) fitIn += delta.fitIn;
        if (delta.discernment !== undefined) {
            discernment = CLAMP(discernment + delta.discernment, 0, 100);
        }
    }

    function getMeters() {
        return { setApart, fitIn, discernment };
    }

    function getLog() {
        return [...log];
    }

    function compactBefore(chapter) {
        const resolved = [];
        const live = [];
        for (const f of log) {
            (f.chapter < chapter ? resolved : live).push(f);
        }
        if (resolved.length) {
            const summary = {};
            for (const f of resolved) summary[f.key] = f.value;
            snapshots.push(summary);
        }
        log = live;
    }

    function serialize() {
        return JSON.stringify({
            log,
            snapshots,
            setApart,
            fitIn,
            discernment,
            reigns,
        });
    }

    function deserialize(json) {
        const data = JSON.parse(json);
        log = data.log || [];
        snapshots = data.snapshots || [];
        setApart = data.setApart || 0;
        fitIn = data.fitIn || 0;
        discernment = data.discernment || 0;
        Object.assign(reigns, data.reigns || {
            nebuchadnezzar: { favor: 50, suspicion: 0 },
            belshazzar: { favor: 50, suspicion: 0 },
            darius: { favor: 50, suspicion: 0 },
        });
        tick = log.length;
    }

    function reset() {
        log = [];
        tick = 0;
        setApart = 0;
        fitIn = 0;
        discernment = 100;
        snapshots = [];
        Object.keys(reigns).forEach(k => {
            reigns[k] = { favor: 50, suspicion: 0 };
        });
    }

    return {
        write, read, made, hasTag,
        adjustReign, getReign, getReignForChapter,
        incrementMeters, getMeters, getLog,
        compactBefore, serialize, deserialize, reset,
    };
})();
