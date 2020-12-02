const {findTwoNumbers, findThreeNumbers, findSecretNumber} = require('./index')

describe('Challenge 01', () => {
    it('should returns 589 and 1431 ', () => {
        const arr = [1861, 1811, 1431, 47, 1158, 589];
        const nums = findTwoNumbers(arr);

        expect(nums).toEqual([1431, 589]);
    });
    it('should returns 715, 562 and 743 ', () => {
        const arr = [715, 1416, 562, 743, 1886];
        const nums = findThreeNumbers(arr);

        expect(nums).toEqual([715, 562, 743])
    });
    it('should returns undefined when try to find two numbers', () => {
        const arr = [715, 1416, 562, 743, 1886];
        const nums = findTwoNumbers(arr);

        expect(nums).toBeUndefined();
    });
    it('should returns undefined when try to find three numbers', () => {
        const arr = [1861, 1811, 1431, 47, 1158, 589];
        const nums = findThreeNumbers(arr);

        expect(nums).toBeUndefined();
    })
    it('should returns the secret number', () => {
        const nums = [1431, 589];
        const secretNumber = findSecretNumber(nums);

        expect(secretNumber).toEqual(842859);
    })
});
