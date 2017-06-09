const chai = require('chai');
const expect = chai.expect;

const modulo = require('../utils/modulo.js');
const Pond = require('../components/Pond.js');
const Duck = require('../components/Duck.js');

const TEST_INPUT = '5 5\n1 2 N\nPFPFPFPFF\n3 3 E\nFFSFFSFSSF';
const TEST_OUTPUT = '1 3 N\n5 1 E';

describe('Modulo function', () => {
    let currIdx = 0;
    const directions = ['N', 'E', 'S', 'W'];
    let currDir = directions[currIdx];
    it('rotates Starboard (right)', () => {
        currIdx = modulo(currIdx, directions.length, 'S');
        currDir = directions[currIdx];
        expect(currIdx).to.be.equal(1);
        expect(currDir).to.be.equal('E');
    });
    it('rotates Port (left)', () => {
        currIdx = modulo(currIdx, directions.length, 'P');
        currDir = directions[currIdx];
        expect(currIdx).to.be.equal(0);
        expect(currDir).to.be.equal('N');
    });
    it('wraps around directions', () => {
        currIdx = modulo(currIdx, directions.length, 'P');
        expect(currIdx).to.be.equal(3);
        currIdx = modulo(currIdx, directions.length, 'S');
        expect(currIdx).to.be.equal(0);
    });
});

describe('Pond Class', () => {
    console.log('coming soon to Ponds near you!');
});

describe('Duck Class', () => {
    console.log('Quack attack!');
});
