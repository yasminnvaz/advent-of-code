const fs = require('fs')
// const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']

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

const dataParsed = parserData(data);
// const dataParsed = parserData(input);

console.log(
    `count: ${validatePasswords(dataParsed)}`
)



