// Monday, Reviewed in One Line — entry program (program/v1).
// Writes one one-line review of Monday to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Monday, one star: my 9 a.m. was a meeting about the meeting, lunch " +
  "was eaten standing over the sink, and by 5 p.m. I'd apologised to " +
  "the office printer. Would not rebook.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
