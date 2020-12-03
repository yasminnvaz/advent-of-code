const data = require('./data')

function findTwoNumbers(arr) {
    const goal = 2020
    let nums

    for (let key1 in arr) {
        for (let key2 in arr) {
            let sum = arr[key1] + arr[key2]
            if (sum === goal) {
                nums = [arr[key1], arr[key2]]
            }
        }
    }

    return nums
}

function findThreeNumbers(arr) {
    const goal = 2020
    let nums

    for (let key1 in arr) {
        for (let key2 in arr) {
            for (let key3 in arr) {
                let sum = arr[key1] + arr[key2] + arr[key3]
                if (sum === goal) {
                    nums = [arr[key1], arr[key2], arr[key3]]
                    break;
                }
            }
        }
    }

    return nums
}

function findSecretNumber(arr) {
    const secretNumber = arr.reduce((acc, curr) => acc * curr);
    return secretNumber
}

const nums1 = findTwoNumbers(data)
const nums2 = findThreeNumbers(data)

console.log(findSecretNumber(nums1));
console.log(findSecretNumber(nums2));

module.exports = {findTwoNumbers, findThreeNumbers, findSecretNumber}
