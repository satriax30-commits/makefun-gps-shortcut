import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's one-line excuse, in its own voice: smug, defensive, and
// blaming an out-of-date map for routing the driver into a lake.
const ENTRY =
  "In my defense, that lake was a road on my map \u2014 the water moved in years ago and nobody bothered to update me.";

const outDir = process.argv[2] ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read the file back and verify the gate holds.
// The entry must be 1-199 characters, a single line, not only whitespace,
// with no trailing newline.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry constant");
}
if (written.length < 1 || written.length > 199) {
  throw new Error(`entry length ${written.length} is outside 1-199 characters`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (written.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (written.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}
