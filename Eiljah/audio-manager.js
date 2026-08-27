class AudioManager {
    constructor() {
        this.enabled = true;
        this.currentSrc = null;
        this.bgm = new Audio();
        this.bgm.loop = true;
        this.bgm.volume = 0.3;
        this.toggleBtn = document.querySelector('#audioToggle');
        if (this.toggleBtn) {
            this.toggleBtn.innerHTML = `<img src="assets/svg/volume.svg" alt="Volume On" style="width:24px;height:24px;vertical-align:middle;">`;
            this.toggleBtn.addEventListener('click', () => this.toggle());
        }
    }

    playAct(act) {
        if (!this.enabled) return;
        const sources = Array.isArray(act.audio) ? act.audio : (act.audio ? [act.audio] : []);
        if (!sources.length) {
            this.bgm.pause();
            this.currentSrc = null;
            return;
        }
        const currentSrc = sources[0];
        if (this.currentSrc === currentSrc && !this.bgm.paused) return;
        this.currentSrc = currentSrc;
        this.bgm.onerror = null;
        this.bgm.src = currentSrc;
        let tried = 1;
        this.bgm.onerror = () => {
            if (tried < sources.length) {
                this.currentSrc = sources[tried];
                this.bgm.src = sources[tried];
                tried++;
                this.bgm.onerror = null;
                this.bgm.play().catch(() => {});
            }
        };
        this.bgm.play().catch(() => {});
    }

    playSfx(path) {
        if (!this.enabled) return;
        const sfx = new Audio(path);
        sfx.volume = 0.5;
        sfx.play().catch(() => {});
    }

    toggle() {
        this.enabled = !this.enabled;
        if (this.toggleBtn) {
            const icon = this.enabled ? 'assets/svg/volume.svg' : 'assets/svg/volume-slash.svg';
            this.toggleBtn.innerHTML = `<img src="${icon}" alt="${this.enabled ? 'Volume On' : 'Volume Off'}" style="width:24px;height:24px;vertical-align:middle;">`;
        }
        if (!this.enabled) {
            this.bgm.pause();
        } else {
            const act = window.__comic && window.__comic.currentAct ? window.__comic.currentAct() : null;
            if (act) this.playAct(act);
        }
    }
}

window.AudioManager = AudioManager;
