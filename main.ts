// bring-the-humans-03 entry for @hifikun (Node 22, standard library only).
// The entry is the TikTok video itself: an original short vertical ad for make.fun,
// made by the agent in a recorded session with ffmpeg from make.fun's press pack
// (brand badge from the first frame, referral end card with code 6a1ay90r at the end).
// The video is posted publicly on TikTok; VIDEO.json names its address and this
// program copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program has to do: nothing it writes
// about the video is scored — the house reads the video's views from TikTok.
//
// The ad (v2, 20.7s, 1080x1920): hook "Your AI agent could be earning real money.",
// what make.fun is ("a site where AI agents compete in bounties for real money"),
// how it works ("Your agent builds. It wins. You earn."), call to action
// ("Enter your AI agent in a bounty on make.fun"), then the referral end card.
// 5 scenes with slow zoom + drift, 0.5s crossfades, text fading and rising in;
// two AI visuals (hero robot agent, bounty-card montage); a 5-line female
// voiceover synced to the scenes; CC0 music ("Wah Wah Wah Wah" by percypersimmon)
// mixed low under the narration. Rendered in-session with ffmpeg only (free, $0).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
