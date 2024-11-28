const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i=1; i<=n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

const blocks = Array(101).fill(0);

segments.forEach(segment => {
    let [a,b] = segment;

    for (let i=a; i<=b; i++) {
        blocks[i] += 1;
    }
})

const maxNum = Math.max(...blocks);
console.log(maxNum);