const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].split(' ').map(Number);
const d = input[2].split(' ').map(Number);


for (let i=0; i<t; i++) {
    let temp = u[n-1]

    for (let j=n-1; j>0; j--) {
        u[j] = u[j-1];
    }

    for (let j=n-1; j>0; j--) {
        d[j] = d[j-1];
    }

    d[0] = temp;
}

console.log(u.join(' '));
console.log(d.join(' '));

