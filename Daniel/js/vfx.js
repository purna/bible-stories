/**
 * VFX.JS
 * Post-processing effects layer, adapted from
 * __docs/daniel-implementation/07-post-processing-vfx.md.
 *
 * The docs describe PixiJS filters; this comic uses CSS so we replicate
 * the same concepts: reign-specific color grading, a state-driven
 * vignette, and dream-sequence blur scoped to the vision layer only.
 *
 * Key principle from the doc: "vignette tightening and dream distortion
 * should move together" — both are driven by VisionEngine.getDistortion().
 */

const VFX = (function () {
    let active = false;

    const REIGN_GRADES = {
        nebuchadnezzar: { filter: 'brightness(1) saturate(1) contrast(1)' },
        belshazzar: { filter: 'brightness(0.9) saturate(0.8) contrast(0.95) sepia(0.15)' },
        darius: { filter: 'brightness(1.05) saturate(0.85) contrast(1.1) sepia(0.2) hue-rotate(-10deg)' },
    };

    const stageEl = document.getElementById('stageWrap');
    const halftoneEl = document.getElementById('halftoneOverlay');

    function setReignGrade(reign) {
        const grade = REIGN_GRADES[reign] || REIGN_GRADES.nebuchadnezzar;
        if (stageEl) stageEl.style.filter = grade.filter;
    }

    function clearReignGrade() {
        if (stageEl) stageEl.style.filter = '';
    }

    function setVignetteIntensity(value) {
        // value: 0-1, driven by VisionEngine distortion
        if (!halftoneEl) return;
        const alpha = 0.18 + value * 0.22; // 0.18 → 0.40
        halftoneEl.style.opacity = String(alpha);
        if (value > 0.3) {
            halftoneEl.style.filter = 'contrast(' + (1 + value) + ') brightness(' + (1 - value * 0.3) + ')';
        } else {
            halftoneEl.style.filter = '';
        }
    }

    function applyDreamDistortion(distortion) {
        // Scoped to the vision overlay only (not the whole screen)
        if (!stageEl) return;
        const visionSvg = stageEl.querySelector('#visionOverlay .vision-prompt') || stageEl;
        const blur = distortion * 6; // max ~6px blur at full distortion
        visionSvg.style.filter = 'blur(' + blur + 'px)';

        setVignetteIntensity(distortion);

        // Pulse the halftone grid for urgency
        if (distortion > 0.5) {
            halftoneEl.style.animation = 'vfxPulse 0.6s ease-in-out infinite alternate';
        } else {
            halftoneEl.style.animation = '';
        }
    }

    function enterVision() {
        active = true;
        applyDreamDistortion(VisionEngine ? VisionEngine.getDistortion() : 0);
    }

    function updateVisionVFX() {
        if (!active || !VisionEngine) return;
        applyDreamDistortion(VisionEngine.getDistortion());
    }

    function exitVision() {
        active = false;
        if (stageEl) stageEl.style.filter = '';
        if (halftoneEl) {
            halftoneEl.style.opacity = '0.18';
            halftoneEl.style.filter = '';
            halftoneEl.style.animation = '';
        }
    }

    return {
        setReignGrade, clearReignGrade,
        setVignetteIntensity, applyDreamDistortion,
        enterVision, updateVisionVFX, exitVision,
    };
})();
