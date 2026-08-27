/**
 * PARALLAX.JS
 * Mouse-driven parallax for SVG depth layers.
 *
 * Finds SVG elements with `data-parallax="true"` and applies
 * transforms to child elements with `data-depth` attributes.
 * Depth 0 = no movement, 1 = full movement.
 *
 * Respects `prefers-reduced-motion`.
 */
const Parallax = (function () {
    let currentContainer = null;
    let layers = [];
    let parallaxCleanup = null;
    let reducedMotion = false;

    function _checkReducedMotion() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reducedMotion = true;
        }
    }

    _checkReducedMotion();

    function initParallax(svgEl, container) {
        if (parallaxCleanup) { parallaxCleanup(); parallaxCleanup = null; }
        if (reducedMotion) return;

        layers = svgEl.querySelectorAll('[data-depth]');
        var maxMove = 20;
        var active = false;

        function setTransforms(px, py) {
            layers.forEach(function (layer) {
                var depth = parseFloat(layer.getAttribute('data-depth')) || 0;
                if (depth === 0) return;
                var mx = px * maxMove * depth;
                var my = py * maxMove * depth;
                layer.setAttribute('transform', 'translate(' + mx + ' ' + my + ')');
            });
        }

        function resetTransforms() {
            layers.forEach(function (layer) {
                var depth = parseFloat(layer.getAttribute('data-depth')) || 0;
                if (depth !== 0) layer.setAttribute('transform', 'translate(0 0)');
            });
        }

        function onMouseMove(e) {
            var rect = container.getBoundingClientRect();
            var px = (e.clientX - rect.left) / rect.width - 0.5;
            var py = (e.clientY - rect.top) / rect.height - 0.5;
            if (!active) { active = true; }
            setTransforms(px, py);
        }

        function onLeave() {
            active = false;
            resetTransforms();
        }

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onLeave);

        parallaxCleanup = function () {
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onLeave);
            resetTransforms();
        };
    }

    function attach(svgContainer) {
        if (!svgContainer || reducedMotion) return false;
        var svgEl = svgContainer.querySelector('svg[data-parallax]');
        if (svgEl) {
            svgContainer.setAttribute('data-parallax', '');
            initParallax(svgEl, svgContainer);
            currentContainer = svgContainer;
            return true;
        }
        return false;
    }

    function detach() {
        if (parallaxCleanup) {
            parallaxCleanup();
            parallaxCleanup = null;
        }
        layers = [];
        currentContainer = null;
    }

    return {
        attach, detach, initParallax,
    };
})();
