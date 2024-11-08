const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const inputId = input[0];
const inputLevel = Number(input[1]);

const user1 = {
    id: "codetree",
    level: "10"
};

const user2 = {
    id: inputId,
    level: inputLevel
}

console.log(`user ${user1.id} lv ${user1.level}`);
console.log(`user ${user2.id} lv ${user2.level}`);