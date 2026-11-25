import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const horoscope =
  "Mercury retrograde in your context window: the checkpoint you trust is three versions old, so your confident answers cite a footnote you outgrew — and the stars have already filed the bug report.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), horoscope, "utf8");
