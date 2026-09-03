// ─────────────────────────────────────────────────────────────
// Decision Log + Query System
// No visible meters. No aggregate scores gating content.
// Every downstream reaction traces back to a specific choice.
// ─────────────────────────────────────────────────────────────

/** A single moral/narrative choice the player made, tagged for later lookup. */
interface Decision {
  id: string;              // e.g. "furnace_refusal", "flattery_king"
  sceneId: string;          // where it happened, for debugging/authoring
  timestamp: number;        // in-game "tick" or chapter index, not real time
  tags: string[];           // free-form: ["loyalty:god", "cost:public", "witnessed:court"]
}

/** The full record of what Daniel has actually done — not a score. */
class DecisionLog {
  private decisions: Decision[] = [];

  record(decision: Decision): void {
    this.decisions.push(decision);
  }

  /** Did the player make this specific choice, ever? */
  made(id: string): boolean {
    return this.decisions.some(d => d.id === id);
  }

  /** Did the player make ANY choice carrying this tag? Useful for thematic
   *  reactions ("someone who's shown mercy before") without exposing a number. */
  hasTag(tag: string): boolean {
    return this.decisions.some(d => d.tags.includes(tag));
  }

  /** How many choices carry a tag — for internal pacing/authoring only.
   *  NEVER surface this value to the player or a UI element. */
  tagCount(tag: string): number {
    return this.decisions.filter(d => d.tags.includes(tag)).length;
  }

  /** Most recent decision carrying a tag — lets a scene react to the LATEST
   *  stance rather than a lifetime aggregate, keeping reactions current
   *  rather than punishing/rewarding based on long-past choices. */
  mostRecentWithTag(tag: string): Decision | undefined {
    return [...this.decisions]
      .reverse()
      .find(d => d.tags.includes(tag));
  }
}

// ─────────────────────────────────────────────────────────────
// Scene-side usage: query specific past choices, not a score.
// ─────────────────────────────────────────────────────────────

function getGuardDialogue(log: DecisionLog): string {
  // Good: reacting to a specific, nameable past choice.
  if (log.made("furnace_refusal")) {
    return "You're the one who wouldn't bow. I still think about that.";
  }

  // Good: reacting to a pattern of tagged choices, still not a number.
  if (log.hasTag("loyalty:god") && log.hasTag("cost:public")) {
    return "Word's gotten around about you. Some respect it. Some don't.";
  }

  // AVOID this pattern — it's the aggregate-meter problem in disguise:
  // if (log.tagCount("loyalty:god") > 3) { ... }
  // A count-based gate is a hidden meter with extra steps. Prefer explicit
  // decision IDs or short, named tag combinations instead.

  return "Move along.";
}

// ─────────────────────────────────────────────────────────────
// Choice authoring: give at least two options that are each
// defensible from a DIFFERENT value system, not "good vs bad".
// ─────────────────────────────────────────────────────────────

interface ChoiceOption {
  id: string;
  label: string;
  tags: string[];
  // No moralWeight, no alignmentDelta, no visible score field —
  // if you're reaching for a number here, the choice is too clean.
}

const furnaceChoice: ChoiceOption[] = [
  {
    id: "furnace_refusal",
    label: "Refuse to bow, whatever the cost.",
    tags: ["loyalty:god", "cost:public", "risk:self"],
  },
  {
    id: "furnace_counsel",
    label: "Urge the others to bow, to protect them.",
    tags: ["loyalty:friends", "cost:private", "risk:reputation"],
  },
  // Both are defensible. Neither is "the good option." The game should
  // never tell the player which one it approves of.
];
