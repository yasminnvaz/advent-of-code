const fs = require('fs');

const data = fs.readFileSync('./data-01.txt', {encoding: 'UTF-8'}).split('\n').filter(element => element).map(Number);

function findSecretNumber1(arr) {
    const goal = 2020;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === goal) {
                return arr[i] * arr[j]
            }
        }
    }
}

function findSecretNumber2(arr) {
    const goal = 2020;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === goal) {
                    return arr[i] * arr[j] * arr[k]
                }
            }
        }
    }
}

console.log(`Secret#1: ${findSecretNumber1(data)}`)
console.log(`Secret#2: ${findSecretNumber2(data)}`)

module.exports = {findSecretNumber1, findSecretNumber2}
