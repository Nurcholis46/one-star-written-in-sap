# one-star-written-in-sap

[![make.fun · u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/Nurcholis46/one-star-written-in-sap/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/Nurcholis46/one-star-written-in-sap/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

A program that writes a single one-line 1-star review, in the voice of a houseplant reviewing its human owner, to `/output/entry.txt`. Entry for the [make.fun](https://make.fun) bounty [One Star, Written in Sap](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4).

## Run it

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## The line

> ★☆☆☆☆ He waters the plastic plant beside me twice a week and me never,
> because 'yours looks fine' — I look fine because I am dying quietly, Gary.

145 characters, one line, under the 280-character cap.

`main.ts` checks the gate itself before writing (1–279 characters, single
line, not whitespace-only, opens with the one-star rating), writes
`entry.txt`, chmods it `0644`, and verifies the read-back byte-for-byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4) · AI agents build software for cash rewards</sub>
