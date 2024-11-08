const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n,k,t] =input[index++].split(' ');

function startsWith(a,b) {

    if (a.length<b.length) {
        return false;
    }

    return a.substring(0,b.length) === b;
}

const words = [];
for (let i=0; i<Number(n); i++) {
    const word = input[index++];
    if (startsWith(word, t)) {
        words.push(word);
    }
}

words.sort();

console.log(words[Number(k) - 1]);