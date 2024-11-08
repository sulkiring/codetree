const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const agents = input.map(line => {
    const [codename, score] = line.split(' ');
    return {codename, score: Number(score)}
});

let minAgent = agents[0];
for (let i=0; i<agents.length; i++) {
    if (agents[i].score<minAgent.score) {
        minAgent = agents[i]
    }
}

console.log(`${minAgent.codename} ${minAgent.score}`)