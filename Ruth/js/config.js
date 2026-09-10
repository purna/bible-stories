/**
 * CONFIG.JS — Ruth
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
        totalBeats: 24
    },

    beats: {
        act2: {
            prayerFullHoldMs: 4000
        }
    },

    palettes: {
        act1: { bg: '#2d5f2d', accent: '#c8a06a' },
        act2: { bg: '#6b4423', accent: '#d4a76a' },
        act3: { bg: '#f6e05e', accent: '#b7791f' },
        act4: { bg: '#4a5568', accent: '#6b8cae' },
        act5: { bg: '#2d5f2d', accent: '#c8a06a' },
        act6: { bg: '#6b4423', accent: '#c8a06a' },
        act7: { bg: '#2d5f2d', accent: '#c8a06a' },
        act8: { bg: '#f6e05e', accent: '#b7791f' }
    }
};