const data = require('./data')

function findTwoNumbers(arr) {
    const goal = 2020
    let nums

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (sum === goal) {
                nums = [arr[i], arr[j]]
            }
        }
    }

    return nums
}

function findThreeNumbers(arr) {
    const goal = 2020
    let nums

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let h = j + 1; h < arr.length; h++) {
                let sum = arr[i] + arr[j] + arr[h]
                if (sum === goal) {
                    nums = [arr[i], arr[j], arr[h]]
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

// console.log(findSecretNumber(nums1));
// console.log(findSecretNumber(nums2));

module.exports = {findTwoNumbers, findThreeNumbers, findSecretNumber}
