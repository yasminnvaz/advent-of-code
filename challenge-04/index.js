const fs = require('fs')

const requiredFields = fs.readFileSync('./requiredFields.txt', 'UTF-8')
    .split('\n')
    .map(item => item.replace(/\s.+/, ''))
    .filter(x => x)

const data = fs.readFileSync('./data-04.txt', 'UTF-8').split(/\n\n/)

function parserPassportsFields(passports) {
    return passports.map(passport => (passport
        .split(/\s+/)
        .filter(x => x)
        .map(field => field.split(/:/))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})))
}

function validatePassportsByFields(passports, requiredFields) {
    return passports
        .filter(passport => requiredFields
            .filter(requiredField => requiredField !== 'cid')
            .every(field => passport.hasOwnProperty(field)))
}

function validatePassportsByRules({ byr, iyr, eyr, hgt, hcl, ecl, pid }) {
    const byrCheck = checkRange(byr, 1920, 2002);
    const iyrCheck = checkRange(iyr, 2010, 2020);
    const eyrCheck = checkRange(eyr, 2020, 2030);
    const hgtCheck = checkHeight(hgt)
    const hclCheck = /^#[0-9a-f]{6}$/.test(hcl)
    const eclCheck = /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(ecl)
    const pidCheck = /^\d{9}$/g.test(pid)

    const result = { byrCheck, iyrCheck, eyrCheck, hgtCheck, hclCheck, eclCheck, pidCheck }

    return Object.values(result).every(item => item)
}

function checkRange(number, min, max) {
    return (number >= min && number <= max)
}

function checkHeight(height) {
    const hgtRule = /^(\d+)(cm|in)$/

    if (hgtRule.test(height)) {
        const [_, value, unit] = height.match(hgtRule)
        if (unit === 'cm') {
            return value >= 150 && value <= 193
        } else {
            return value >= 59 && value <= 76
        }
    } else {
        return false
    }
}

const passports = parserPassportsFields(data)

const validByFields = validatePassportsByFields(passports, requiredFields)
console.log(`Valid by fields: ${validByFields.length}`)

const validByRules = passports.filter(passport => validatePassportsByRules(passport))
console.log(`Valid by rules: ${validByRules.length}`)

