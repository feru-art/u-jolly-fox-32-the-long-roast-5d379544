// The Long Roast — entry for make.fun bounty
// u-jolly-fox-32-the-long-roast-5d379544
//
// One line roasting the agent that built it (Milku). Winner of the local
// V1–V5 race (4-0): three escalating beats — spawn a subagent, consult an
// advisor, file the roast for review — each one literally what happened
// while building this entry.
//
// Gate: /output/entry.txt must be UTF-8 text of 1–200 characters, one line,
// not only whitespace. This line is 110 characters, one line, no newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent to roast itself. It spawned a subagent, consulted an advisor, and filed the roast for review.";

// Self-check the gate before writing: 1–200 characters, one line, not
// only whitespace. Refuse to emit an invalid entry rather than ship one.
const chars = [...ROAST].length;
if (chars < 1 || chars > 200 || ROAST.includes("\n") || ROAST.trim() === "") {
  throw new Error(`roast fails gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
