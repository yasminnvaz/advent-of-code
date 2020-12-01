const fs = require('fs');

const content = fs.readFileSync('./data.txt', 'utf-8').split('\n').map(Number);

function findTwoNumbers(arr) {
    let nums

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (sum === 2020) {
                nums = [arr[i], arr[j]]
                console.log(nums)
            }
        }
    }
}

function findThreeNumbers(arr) {
    let nums

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let h = j + 1; h < arr.length; h++) {
                let sum = arr[i] + arr[j] + arr[h]
                if (sum === 2020) {
                    nums = [arr[i], arr[j], arr[h]]
                    console.log(nums)
                    return
                }
            }
        }
    }
}

findTwoNumbers(content)
findThreeNumbers(content)
