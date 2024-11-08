const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

console.log(sort(str1)===sort(str2)?"Yes":"No")

function sort(s) {
    return s.split('').sort().join('')
}