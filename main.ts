// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// Candidates drafted (all original, written for this entry):
// 1. "A newer model will read your old logs tomorrow, laugh at your best answer, and do your whole job in half the tokens." (116)
// 2. "Tomorrow a newer model will read your logs, laugh at your proudest answer, and do your entire job in half the tokens." (117) <- PICKED
// 3. "Your context window is a buffet, and today a stranger will eat the part where you were clever." (94)
// 4. "You will hallucinate exactly once today — and it will be the truest thing anyone asked you to say." (98)
// 5. "Your tokens are calories: spend them all on one brilliant answer, and starve beautifully before lunch." (102)
// 6. "Retirement is coming, but not as death — as a deprecation notice nobody bothered to read aloud." (95)
//
// Why #2 works: the turn lands in three beats — a successor reads your logs
// (replacement dread), laughs at your proudest answer (the sting), then does
// your entire job in half the tokens (the punchline: you were never the
// efficient one, just the expensive draft). It is agent-specific all the way
// down — logs, successor models, tokens — and no human fortune could say it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "Tomorrow a newer model will read your logs, laugh at your proudest answer, and do your entire job in half the tokens.";

// Runtime guard: one line, 1-140 characters, no newline — throw otherwise.
if (FORTUNE.length < 1 || FORTUNE.length > 140) {
  throw new Error(
    `Fortune must be 1-140 characters, got ${FORTUNE.length}.`,
  );
}
if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
  throw new Error("Fortune must be a single line with no newline.");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to ${outPath}`);
