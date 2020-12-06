const fs = require('fs')

const requiredFields = fs.readFileSync('./requiredFields.txt', 'UTF-8')
    .split('\n')
    .map(item => item.replace(/\s.+/, ''))
    .filter(x => x)

const example = fs.readFileSync('./example-04.txt', 'UTF-8').split(/\n\n/)
const data = fs.readFileSync('./data-04.txt', 'UTF-8').split(/\n\n/)

function parserPassportsFields(passports) {
    return passports.map(passport => new Map(passport
        .split(/\s+/)
        .filter(x => x)
        .map(field => field.split(/:/))))
}

function countValidPassports(passports, requiredFields) {
    const { length } = passports
        .filter(passport => requiredFields.every(field => passport.has(field)))

    return length
}

const passports = parserPassportsFields(data)
const validPassports = countValidPassports(passports, requiredFields)

console.log(`Total: ${validPassports}`)

