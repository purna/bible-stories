/**
 * CONFIG.JS — Deborah
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
        totalBeats: 21
    },

    beats: {
        act2: {
            prayerFullHoldMs: 4000
        }
    },

    palettes: {
        act1: { bg: '#2d5f2d', accent: '#4e9e6b' },
        act2: { bg: '#6b4423', accent: '#d4a76a' },
        act3: { bg: '#1a202c', accent: '#6b8cae' },
        act4: { bg: '#b7791f', accent: '#d4b84b' },
        act5: { bg: '#2d5f2d', accent: '#4e9e6b' },
        act6: { bg: '#1a0e08', accent: '#c84b4b' },
        act7: { bg: '#b7791f', accent: '#d4b84b' }
    }
};