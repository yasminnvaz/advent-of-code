const fs = require('fs');

const data = fs.readFileSync('./data-06.txt', { encoding: "utf-8" }).split(/\n\n/).filter(x => x);
const example = fs.readFileSync('./example-06.txt', { encoding: "utf-8" }).split(/\n\n/).filter(x => x);

function removeDuplicatedAnswers(answers) {
    return [...new Set(answers)].filter(item => item !== '\n');
}

function countAnswers(answers) {
    return answers.map(answer => answer.length).reduce((a, b) => a + b)
}

function countEveryoneAnswer(answers) {
    let answersGroup = []

    for (const answer of answers) {
        let uniqueAnswers = removeDuplicatedAnswers(answer)
        answersGroup.push([...uniqueAnswers].filter(char => answer.split(/\n/).filter(x => x).every(answer => answer.includes(char))).length)
    }

    return answersGroup
}

const answersWithoutDuplicates = data.map((answer) => removeDuplicatedAnswers(answer))
// console.log(answersWithoutDuplicates)

const totalAnsweredByAnyone = countAnswers(answersWithoutDuplicates)
// console.log(totalAnsweredByAnyone)

const totalAnsweredByEveryone = countEveryoneAnswer(example)
console.log(totalAnsweredByEveryone)

