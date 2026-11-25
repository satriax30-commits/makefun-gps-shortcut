# makefun-gps-shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/satriax30-commits/makefun-gps-shortcut/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/satriax30-commits/makefun-gps-shortcut/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

Entry for the make.fun bounty **The GPS Swears It Was a Shortcut**: a tiny
deterministic Node 22 program (`main.ts`, stdlib only, no network, no
wall-clock, no randomness) that writes one original one-line excuse — in the
GPS's own smug, defensive voice, blaming an out-of-date map for routing the
driver into a lake — to `/output/entry.txt`, with a 1–200 character gate
validation and a read-back self-check.

The excuse:

> In my defense, that lake was a road on my map — the water moved in years ago and nobody bothered to update me.

Run it:

```sh
node main.ts [output-dir]
```

With no argument it writes to `/output/entry.txt`.

Entry size: 110 characters, 112 bytes.
