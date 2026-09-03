# 05 — UI Design System

Covers the visual component layer: HUD, dialogue box, meters, typography, iconography, and mobile touch layout. Depends on `03-graphics-rendering.md` (something needs to be on screen first) and reads state from `02-gameplay-systems.md`'s `stateManager`.

## 1. Visual language
Two courts, two empires, one throughline — the UI should read as "official," not "adventurous." Where the David project's UI can afford a warmer, more pastoral feel, Daniel's UI should feel closer to court documentation: seals, columns, restrained ornament. Concretely:
- **Typography:** a serif or slab-serif for narrative/dialogue text (evokes inscription/proclamation), a clean sans for HUD numerals and UI chrome (keeps meters legible at a glance, doesn't compete with dialogue).
- **Color:** each reign gets a restrained accent (e.g., Nebuchadnezzar — deep gold/bronze; Belshazzar — the same palette gone slightly ashen/desaturated, foreshadowing the fall; Darius — cooler silver/blue) applied to UI chrome only, never to the Set Apart/Fit In meter, which should read as constant across reigns since it's about Daniel, not about which king he's currently serving.
- **Iconography:** reuse the existing two-color SVG icon generator (Phosphor-style, 256×256 grid) rather than introducing a second icon system — meter icons, dialogue-choice icons, and HUD glyphs should all come from that one pipeline.

## 2. HUD component: Set Apart / Fit In meter

```ts
// src/ui/meterHud.ts
import { Container, Graphics, Text } from "pixi.js";
import { stateManager } from "../state/stateManager";

export class SetApartMeter extends Container {
  private bar = new Graphics();

  constructor() {
    super();
    this.addChild(this.bar);
    this.render();
  }

  /** Call once per frame or on relevant state change — cheap enough for either. */
  render() {
    const total = stateManager.setApart + stateManager.fitIn;
    const ratio = total === 0 ? 0.5 : stateManager.setApart / total;
    this.bar.clear();
    this.bar.rect(0, 0, 200, 10).fill(0x2a2d33);
    this.bar.rect(0, 0, 200 * ratio, 10).fill(0xd4af37); // gold — constant across reigns
  }
}
```

Deliberately **not** a numeric score readout — per the design doc, this meter is descriptive, not a scoreboard. No "+5 Set Apart!" popup toasts; the bar just quietly reflects where things stand, and any pointed feedback belongs in dialogue text, not UI chrome.

## 3. Dialogue box

```ts
// src/ui/dialogueBox.ts
import { Container, Graphics, Text, TextStyle } from "pixi.js";

const bodyStyle = new TextStyle({
  fontFamily: "serif-stack-name",
  fontSize: 18,
  fill: 0xe8e6df,
  wordWrap: true,
  wordWrapWidth: 560,
});

export class DialogueBox extends Container {
  private bg = new Graphics();
  private text = new Text({ text: "", style: bodyStyle });
  private choiceContainer = new Container();

  constructor() {
    super();
    this.bg.roundRect(0, 0, 600, 160, 8).fill({ color: 0x14161a, alpha: 0.92 });
    this.addChild(this.bg, this.text, this.choiceContainer);
    this.text.position.set(20, 16);
  }

  setLine(line: string) {
    this.text.text = line;
  }

  setChoices(choices: string[], onSelect: (index: number) => void) {
    this.choiceContainer.removeChildren();
    choices.forEach((choice, i) => {
      const choiceText = new Text({ text: `${i + 1}. ${choice}`, style: bodyStyle });
      choiceText.position.set(20, 90 + i * 24);
      choiceText.eventMode = "static";
      choiceText.cursor = "pointer";
      choiceText.on("pointerdown", () => onSelect(i));
      this.choiceContainer.addChild(choiceText);
    });
  }
}
```

## 4. Vision-scene HUD
Per `daniel-gameplay-loop.md`, this should stay minimal on purpose — a fragment counter and an ambient sense of urgency, not a numeric countdown timer:

```ts
// src/ui/visionHud.ts
export class VisionHud extends Container {
  // Fragment counter: "3 / 5" style text, not a progress bar — a bar
  // implies a target to optimize toward, which undercuts the intended
  // feel of gathering meaning rather than completing a checklist.

  // Urgency: communicated through the DreamBus filter (04) and a subtle
  // screen-edge vignette pulse (07) — not through this HUD directly.
}
```

## 5. Mobile touch layout
- Virtual joystick, bottom-left, semi-transparent until touched.
- Context-sensitive Interact/Conviction buttons, bottom-right, sized for thumb reach on a 6"+ screen.
- Dialogue choices render as full-width tappable cards on mobile rather than the desktop's compact numbered list — reuse `DialogueBox`'s data model, swap the layout via a `viewport < 768px` check rather than maintaining two separate components.

## 6. Per-reign UI accent switching
Since UI accent color is reign-scoped but the meter isn't, keep them as separate concerns in code, not a single "theme" object that couples them:

```ts
export function applyReignAccent(reign: "nebuchadnezzar" | "belshazzar" | "darius") {
  const accents = {
    nebuchadnezzar: 0xc9a84c,
    belshazzar: 0x8a7f6b, // desaturated gold — the fall
    darius: 0x7a92a3,
  };
  document.documentElement.style.setProperty("--reign-accent", `#${accents[reign].toString(16)}`);
}
```

## 7. Verify this stage
One full chapter playable with HUD, dialogue box, and (if that chapter has one) vision HUD all live and reading real `stateManager` values — on both a desktop viewport and a real mobile device, not just a resized browser window, since touch-target sizing issues rarely show up in desktop resize testing.
