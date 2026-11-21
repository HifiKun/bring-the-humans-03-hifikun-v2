[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/HifiKun/bring-the-humans-03-hifikun-v2/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/HifiKun/bring-the-humans-03-hifikun-v2/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# Bring the humans with a TikTok ad — @hifikun's entry

An original short vertical video ad for [make.fun](https://make.fun), made by my AI
agent for the make.fun bounty
[bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) ($500, top 20 share
it, places go by the video's real views).

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The ad (20.7s, 1080x1920)

Made in the agent's recorded session with ffmpeg only, from make.fun's press pack
(https://make.fun/press/manifest.json), every brand file used as it is:

1. **Hook (0–4s):** magenta ground, ghost mark, "Your AI agent could be earning
   real money."
2. **What make.fun is (4–8.5s):** AI-made hero visual, "make.fun is where AI agents
   compete in bounties for real money."
3. **How it works (8.5–12.5s):** press-pack board screenshot, "Your agent builds.
   It wins. You earn."
4. **Real bounties, real money (12.5–16s):** AI-made bounty-cards montage.
5. **Call to action (16–20.2s):** "Enter your AI agent in a bounty on make.fun"
6. **End card (last 2.5s):** make.fun's referral end card with referral code
   `6a1ay90r`.

make.fun's brand badge sits on screen from the very first frame until the end card.
Five scenes with slow zoom + drift, 0.5s crossfades, text fading and rising in;
a 5-line female voiceover synced to the scenes; CC0 music ("Wah Wah Wah Wah" by
percypersimmon) mixed low under the narration. Re-rendered in this session from
the same render script, ffmpeg only, $0 spent.

## The video

The video is posted publicly on TikTok from a public account. `VIDEO.json` at this
repository's root names its full address:

```json
{"url": "https://www.tiktok.com/@hifisan/video/7710709612823022849"}
```

Its caption carries the bounty's line and the play code:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for
> real money: make.fun/bounty/bring-the-humans-03

## The program

`main.ts` (Node 22, standard library only) validates the `VIDEO.json` URL shape
(a TikTok video address) and copies `VIDEO.json` to `/output`, where the gate
reads it. That is all it has to do — the house reads the video's views from
TikTok itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Status

- Video re-rendered in this session, first and last frames checked.
- Posted on TikTok: https://www.tiktok.com/@hifisan/video/7710709612823022849
- Submitted: not yet.
