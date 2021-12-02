const fs = require('fs');

const data = fs.readFileSync('./data.txt', { encoding: 'UTF-8' })
    .split(/\n/)
    .filter(element => element)
    .map((line) => {
        const [key, value] = line.split(' ')
        return { [key]: value }
    })

const solution1 = (data) => {
    let horizontal = 0
    let depth = 0

    for (const property in data) {
        const key = Object.keys(data[property])
        const value = parseInt(data[property][key], 10)

        if (key.includes('forward')) {
            horizontal += value
        }
        if (key.includes('down')) {
            depth += value
        }
        if (key.includes('up')) {
            depth -= value
        }
    }

    return horizontal * depth
}

const solution2 = (data) => {
    let horizontal = 0
    let depth = 0
    let target = 0

    for (const property in data) {
        const key = Object.keys(data[property])
        const value = parseInt(data[property][key], 10)

        if (key.includes('forward')) {
            horizontal += value
            depth += (target * value)
        }
        if (key.includes('down')) {
            target += value
        }
        if (key.includes('up')) {
            target -= value
        }
    }

    return horizontal * depth
}

console.log('solution1', solution1(data))
console.log('----------------------------');
console.log('solution2', solution2(data))
