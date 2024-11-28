const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const OFFSET = 100;
const MAX_R = 200;


const n = Number(input[0]);
const segments = [];
for (let i=1; i<=n; i++) {
    segments.push(input[i].split(' ').map(Number))
}
const checked = Array(MAX_R + 1).fill(0);

segments.forEach(segment => {
    let [x1, x2] = segment;

    x1 += OFFSET;
    x2 += OFFSET;

    for (let i = x1; i<x2; i++)
 {
    checked[i] += 1;
 }
})

const maxNum = Math.max(...checked);
console.log(maxNum);