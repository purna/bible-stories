/**
 * CONFIG.JS — Gideon
 * A single source of truth for all settings and constants.
 */

const CONFIG = {
    paths: {
        manifest: 'data/manifest.json',
        epilogues: 'data/epilogues.json'
    },

    transitions: {
        textFadeOutDuration: 400,
        textFadeOutEasing: 'easeInQuad'
    },

    compass: {
        indicatorSelector: '#compass-indicator',
        neutralThreshold: 15,
        axisMin: -100,
        axisMax: 100,
        totalBeats: 9
    },

    beats: {
        act2: {
            prayerFullHoldMs: 4000
        }
    },

    palettes: {
        act1: { bg: '#2a1a10', accent: '#c8a84b' },
        act2: { bg: '#1a0e08', accent: '#c8a84b' },
        act3: { bg: '#1a1420', accent: '#c8a84b' },
        act4: { bg: '#101820', accent: '#c8a84b' },
        act5: { bg: '#100a1a', accent: '#c8a84b' },
        act6: { bg: '#1a0808', accent: '#c8a84b' },
        act7: { bg: '#1a2010', accent: '#c8a84b' }
    },

    // Edit mode lets an admin reposition every text box and tune its
    // delay / fade-in / effect live on screen, then save to localStorage
    // and export a JSON file of overrides that can be merged into /data.
    editMode: {
        enabled: true,
        storageKey: 'gideon-comic-edit-settings',
        toggleKey: 'KeyE',
        effects: ['fade', 'type', 'wave', 'bounce', 'shake'],
        fadeDefault: 600,
        delayDefault: 0
    }
};