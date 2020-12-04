const fs = require('fs')

const data = fs.readFileSync('./data-02.txt', 'UTF-8').split('\n').filter(item => item);

function parserData(data) {
    let parsedData = []

    data.forEach(item => {
        const {groups} = /^(?<min>\d+)-(?<max>\d+) (?<letter>.): (?<password>.*)$/.exec(item)

        /**
         * Regex Fragment   | Meaning
         * ===========================
         * (\d+)-(\d+)      | ...numbers, separated by hyphen
         * (.):             | ...anything followed by colon
         * (.*)             | ...anything until the end
         * ?<min>           | ...group result called MIN
         */

        parsedData.push({
            min: groups.min,
            max: groups.max,
            letter: groups.letter,
            password: groups.password
        })
    })

    return parsedData
}

function validatePasswords(passwords) {
    let count = 0

    for (let key in passwords) {

        let {letter, password, min, max} = passwords[key]

        const regex = new RegExp(`${letter}`, 'g')
        const letterCounter = (password.match(regex) || []).length;

        if (letterCounter >= min && letterCounter <= max) count++
    }

    return count
}

function validatePasswordsByXOR(passwords) {
    let count = 0

    for (let key in passwords) {
        let {letter, min, max} = passwords[key]
        let password = passwords[key].password.split((''))

        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
        if (password[min - 1] === letter ^ password[max - 1] === letter) count++
    }

    return count
}

const parsedData = parserData(data)

console.log(`Valid Passwords: ${validatePasswords(parsedData)}`)
console.log(`Valid Passwords: ${validatePasswordsByXOR(parsedData)}`)

module.exports = {parserData, validatePasswords, validatePasswordsByXOR}

