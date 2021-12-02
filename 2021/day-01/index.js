const fs = require('fs');

const data = fs.readFileSync('./data.txt', { encoding: 'UTF-8' })
    .split(/\n/)
    .filter(element => element)
    .map(Number);

const solution1 = (data) => {
    let counter = 0
    
    for (let i = 1; i < data.length; i++) {
        const last = data[i - 1]
        const current = data[i]

        if(current > last) counter++
    }

    return counter
}

const solution2 = (data) => {
    let counter = 0
    
    for (let i = 3; i < data.length; i++) {
        const last = data[i - 1] + data[i - 2] + data[i - 3]
        const current = data[i] + data[i - 1] + data[i - 2]

        if(current > last) counter++
    }

    return counter
}

console.log(solution1(data))
console.log(solution2(data))