const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'UTF-8').split('\n');

function parserData(data) {
    let parsedData = []

    for (let key in data) {
        let parsed = data[key].split(' ')

        if (parsed[0] !== '') {
            parsedData.push({
                times: parsed[0].split('-').map(Number),
                letter: parsed[1].replace(':', ''),
                password: parsed[2]
            })
        }
    }

    return parsedData
}

function validatePasswords(arr) {
    let count = 0

    for (let key in arr) {

        let letter = arr[key].letter;
        let min = arr[key].times[0];
        let max = arr[key].times[1];

        let password = arr[key].password;

        const regex = new RegExp(`${letter}`, 'g')
        const letterCounter = (password.match(regex) || []).length;

        if (letterCounter >= min && letterCounter <= max) count++
    }


    return count

}

function validatePasswordsByPosition(arr) {

    let count = 0

    for (let key in arr) {
        let password = arr[key].password.split('');
        let position1 = arr[key].times[0] - 1;
        let position2 = arr[key].times[1] - 1;
        let letter = arr[key].letter;

        let validation1 = password[position1] === letter;
        let validation2 = password[position2] === letter;

        if ((validation1 || validation2) && !(validation1 && validation2)) count++

    }

    return count
}

module.exports = { parserData, validatePasswords, validatePasswordsByPosition }

