const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let result = [];

for (let i=0; i<n; i++) {
    if (i%2===0) {
        arr = nums.slice().sort()
        result.push(arr[Math.floor(i/2)]);
    }
}

console.log(result.join(' '))