const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binary = input[0].split('').map(Number);

let num = 0;
binary.forEach(bit => {
    num = num * 2 +bit;
})

console.log(num);