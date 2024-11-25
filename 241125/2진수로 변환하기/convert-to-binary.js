const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
const digits = [];

while (true) {
    if (n<2) {
        digits.push(n);
        break;
    }

    digits.push(n%2);
    n = Math.floor(n/2);
}

console.log(digits.reverse().join(""));
