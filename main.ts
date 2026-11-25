// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt.
//
// The line: the plant's owner waters the plastic plant beside it twice a
// week and the real plant never, because "yours looks fine" — the joke
// lands on the plant dying quietly while the fake one gets all the care.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "★☆☆☆☆ He waters the plastic plant beside me twice a week and me never, " +
  "because 'yours looks fine' — I look fine because I am dying quietly, Gary.";

// Gate check (mirrors the sealed scorer): UTF-8 text, 1–279 characters,
// a single line, not only white space.
function gateCheck(text: string): void {
  if (text.length < 1 || text.length > 279) {
    throw new Error(`gate: length ${text.length} outside 1-279 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: text is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: text must be a single line");
  }
  if (!text.startsWith("★☆☆☆☆")) {
    throw new Error("gate: text must open with the one-star rating");
  }
}

function main(): void {
  gateCheck(REVIEW);
  // Default umask so anything we create is world-readable.
  process.umask(0o022);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, REVIEW, "utf8");
  // The grader collects outputs as another user: leave the file readable.
  chmodSync(outFile, 0o644);
  // Verify the round-trip before exiting.
  const back = readFileSync(outFile, "utf8");
  if (back !== REVIEW) {
    throw new Error("verify: read-back does not match the review");
  }
  gateCheck(back);
  console.log(`wrote ${outFile} (${REVIEW.length} chars)`);
}

main();
