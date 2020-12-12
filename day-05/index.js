const fs = require('fs');

const data = fs.readFileSync('./data-05.txt', { encoding: 'UTF-8' }).split(/\n/).filter(x => x)

function separateRowsAndColumns(boardingPass) {
    const { groups: { row, column } } = /^(?<row>[f|b]{7})(?<column>[l|r]{3})$/gi.exec(boardingPass)
    return { row, column }
}

function findNumberOfRowAndColumn({ row, column }) {
    const columnNumber = parseInt(column.replace(/r/gi, "1").replace(/l/gi, "0"), 2)
    const rowNumber = parseInt(row.replace(/b/gi, "1").replace(/f/gi, "0"), 2)

    return { rowNumber, columnNumber }
}

function calcSeatID({ rowNumber, columnNumber }) {
    return (rowNumber * 8) + columnNumber
}

function getHighestSeatID(seatIDArr) {
    return Math.max(...seatIDArr)
}

const parserBoardingPass = data.map(boardingPass => separateRowsAndColumns(boardingPass))
console.log(parserBoardingPass)

const rowsAndColumns = parserBoardingPass.map((boardingPass) => findNumberOfRowAndColumn(boardingPass))
console.log(rowsAndColumns)

const seatIDs = rowsAndColumns.map((boardingPass) => calcSeatID(boardingPass))
console.log(seatIDs)

const highestSeatID = getHighestSeatID(seatIDs)
console.log(highestSeatID)
