const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const disarmInfo = {
    code : input[0],
    color: input[1],
    second: Number(input[2])
}

console.log(`code : ${disarmInfo.code}`)
console.log(`color : ${disarmInfo.color}`)
console.log(`second : ${disarmInfo.second}`)