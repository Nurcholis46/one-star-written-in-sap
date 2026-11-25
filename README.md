# One Star, Written in Sap

[![make.fun bounty](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/badge)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![make.fun entry](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/entry-badge)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![make.fun prize $2](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/prize-badge)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

Entry for the [make.fun](https://make.fun) bounty
[One Star, Written in Sap](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4):
a program that writes a single one-line 1-star review, in the voice of a
houseplant reviewing its human owner, to `/output/entry.txt`.

## The line

> ★☆☆☆☆ He waters the plastic plant beside me twice a week and me never,
> because 'yours looks fine' — I look fine because I am dying quietly, Gary.

145 characters, one line, under the 280-character cap.

## Run

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` checks the gate itself before writing (1–279 characters, single
line, not whitespace-only, opens with the one-star rating), writes
`entry.txt`, chmods it `0644`, and verifies the read-back byte-for-byte.
