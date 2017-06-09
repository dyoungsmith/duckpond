const Pond = require('./components/Pond.js');

// const TEST_INPUT = '5 5\n1 2 N\nPFPFPFPFF'; // '1 3 N';
const TEST_INPUT = '5 5\n1 2 N\nPFPFPFPFF\n3 3 E\nFFSFFSFSSF'; // '1 3 N\n5 1 E';

// Split up the lines of input
let inputArr = TEST_INPUT.split('\n');
inputArr = inputArr.map(elem => elem.split(' '));

const xMax = Number(inputArr[0][0]);
const yMax = Number(inputArr[0][1]);
const ducksArr = inputArr.slice(1);

let DuckPond = new Pond(xMax, yMax, ducksArr);
