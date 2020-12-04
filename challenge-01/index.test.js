const fs = require("fs");

const example = fs.readFileSync('./example-01.txt', {encoding: 'UTF-8'}).split('\n').filter(element => element).map(Number);
const {findSecretNumber1, findSecretNumber2} = require('./index')

describe('Challenge 01', () => {
    it('should returns 751776', () => {
        const result = findSecretNumber1(example);
        expect(result).toEqual(514579);
    });

    it('should returns 715, 562 and 743 ', () => {
        const result = findSecretNumber2(example);
        expect(result).toEqual(241861950)
    });
});
