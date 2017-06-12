const fs = require('fs');
const Pond = require('./components/Pond.js');

// const TEST_INPUT = '5 5\n1 2 N\nPFPFPFPFF'; // '1 3 N';
// const TEST_INPUT = '5 5\n1 2 N\nPFPFPFPFF\n3 3 E\nFFSFFSFSSF'; // '1 3 N\n5 1 E';

fs.readFile('./instructions.txt', 'utf8', (err, instructions) => {
    if (err) console.error(err);
    else {
        // Split up the lines of input
        let inputArr = instructions.split('\n');
        inputArr = inputArr.map(elem => elem.split(' '));

        const xMax = Number(inputArr[0][0]);
        const yMax = Number(inputArr[0][1]);
        const ducksArr = inputArr.slice(1); // [['1','2','N'],['PFPFPFPFF']]

        let DuckPond = new Pond(xMax, yMax, ducksArr);
    }
});
