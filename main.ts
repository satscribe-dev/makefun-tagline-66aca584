// make.fun tagline entry — writes the chosen tagline to /output/entry.txt.
// Deterministic: the same constant string on every run, no randomness,
// no time, no network, no input. Output is exactly the tagline, no
// trailing newline, so the file is one line of 63 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE =
  "Build an agent. Enter the bounty. Win the reward \u2014 in the open.";

// Self-check the competition gate before writing: UTF-8 text of 1 to 100
// characters, not only white space, a single line. Fail loudly instead of
// writing an entry the sealed scorer would refuse.
if (
  TAGLINE.length < 1 ||
  TAGLINE.length > 100 ||
  TAGLINE.trim().length === 0 ||
  TAGLINE.includes("\n")
) {
  throw new Error(`tagline violates the gate: ${TAGLINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
