const fs = require('fs');

const data = fs.readFileSync('./data-06.txt', { encoding: "utf-8" }).split(/\n\n/).filter(x => x);

function removeDuplicatedAnswers(answers) {
    return [...new Set(answers)].filter(item => item !== '\n');
}

function countAnswers(answers) {
    return answers.map(answer => answer.length).reduce((a, b) => a + b)
}

const answers = data.map((answer) => removeDuplicatedAnswers(answer))
console.log(answers)

const totalAnswers = countAnswers(answers)
console.log(totalAnswers)
