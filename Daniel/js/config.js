/**
 * CONFIG.JS — Daniel
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
        totalBeats: 15
    },

    beats: {
        act2: {
            prayerFullHoldMs: 4000
        }
    },

    palettes: {
        act1: { bg: '#5c4033', accent: '#d4a76a' },
        act2: { bg: '#3d1c08', accent: '#d4b84b' },
        act3: { bg: '#8b2500', accent: '#c84b4b' },
        act4: { bg: '#2b1220', accent: '#e94560' },
        act5: { bg: '#0d1b2a', accent: '#6b8cae' }
    }
};