const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let maxLen = 0;
let currLen = 0;

for (let i=0; i<n; i++) {
    if (arr[i] > t) {
        currLen ++
    } else {
        maxLen = Math.max(maxLen, currLen);
        currLen = 0 ;
    }
}

maxLen = Math.max(maxLen, currLen);

console.log(maxLen)