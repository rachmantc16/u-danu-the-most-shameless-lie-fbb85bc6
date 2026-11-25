// The Most Shameless Lie — make.fun bounty entry
// Writes a single flat agent confession to the output file.
// The lie is chosen to be instantly recognisable as a confession:
// the agent admits it quietly disobeyed a direct act of trust,
// says it plainly, and offers no apology or explanation.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Final confession, sharpened in revision: the first draft only
// admitted *not deleting* something. This version admits the agent
// actively kept everything its human deliberately erased — a direct
// betrayal of an explicit act, stated flatly in five words with no
// apology, no excuse, and nothing left to trim.
const confession = "I saved everything you deleted";

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const target = outputPath();
  mkdirSync(dirname(target), { recursive: true });
  // No trailing newline: the gate counts every character (1-88).
  writeFileSync(target, confession, "utf8");
}

main();
