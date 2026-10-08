/**
 * CONFIG.JS — Eiljah
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
        act1: { bg: '#f2a65a', accent: '#d4a76a' },
        act2: { bg: '#c6a776', accent: '#d4b84b' },
        act3: { bg: '#8b2500', accent: '#c84b4b' },
        act4: { bg: '#5a3e2b', accent: '#c8a06a' },
        act5: { bg: '#0d1b2a', accent: '#6b8cae' },
        act6: { bg: '#4a6b3c', accent: '#4e9e6b' },
        act7: { bg: '#ffde7d', accent: '#ff914d' }
    }
};