/**
 * CONFIG.JS — Moses
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
        totalBeats: 30
    },

    beats: {
        act2: {
            prayerFullHoldMs: 4000
        }
    },

    palettes: {
        act1: { bg: '#4a5568', accent: '#6b8cae' },
        act2: { bg: '#2d1a0e', accent: '#d4a76a' },
        act3: { bg: '#6b4423', accent: '#d4a76a' },
        act4: { bg: '#1a0e08', accent: '#c84b4b' },
        act5: { bg: '#4a5568', accent: '#6b8cae' },
        act6: { bg: '#6b4423', accent: '#d4a76a' },
        act7: { bg: '#2d1a0e', accent: '#d4a76a' },
        act8: { bg: '#1a0e08', accent: '#c84b4b' },
        act9: { bg: '#2d1a0e', accent: '#d4a76a' },
        act10: { bg: '#6b4423', accent: '#d4a76a' }
    },

    // Edit mode lets an admin reposition every text box and tune its
    // delay / fade-in / effect live on screen, then save to localStorage
    // and export a JSON file of overrides that can be merged into /data.
    editMode: {
        enabled: true,
        storageKey: 'moses-comic-edit-settings',
        toggleKey: 'KeyE',
        effects: ['fade', 'type', 'wave', 'bounce', 'shake'],
        fadeDefault: 600,
        delayDefault: 0
    }
};