const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);

let leftSide = input[1].trim().split(/\s+/).map(Number);
let rightSide = input[2].trim().split(/\s+/).map(Number);
let bottomSide = input[3].trim().split(/\s+/).map(Number);

let belt = leftSide.concat(rightSide, bottomSide);
const length = belt.length;

const shift = t%length;

if (shift>0) {
    belt = belt.slice(length-shift).concat(belt.slice(0, length-shift));
}

const newLeft = belt.slice(0,n);
const newRight = belt.slice(n,2*n);
const newBottom = belt.slice(2*n,3*n);

console.log(newLeft.join(" "));
console.log(newRight.join(" "));
console.log(newBottom.join(" "));
