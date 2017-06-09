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
    const input = [['1', '2', 'N'], ['PFPFPFPFF'], ['3', '3', 'E'], ['FFSFFSFSSF']];
    let TestPond = new Pond(5, 10, input);

    it('creates a pond of correct dimensions', () => {
        expect(TestPond.xMax).to.be.equal(5);
        expect(TestPond.yMax).to.be.equal(10);
    });
    it('has the correct number of ducks', () => {
        expect(TestPond.ducks).to.have.lengthOf(2);
    });
    it('initializes with correct final duck positions', () => {
        expect(TestPond.finalPositions[1]).to.be.equal('5 1 E');
    });
});

describe('Duck Class', () => {
    let TestDuck;
    beforeEach(() => {
        TestDuck = new Duck(['0', '2', 'N'], 'PFPFPFPFF');
    });

    describe('duck duck duck', () => {
        it('initializes coordinates and heading', () => {
            expect(TestDuck.x).to.be.equal(0);
            expect(TestDuck.y).to.be.equal(2);
            expect(TestDuck.heading).to.be.equal('N');
        });
        it('rotates port and starboard', () => {
            TestDuck.changeHeading('P', 5, 5);
            expect(TestDuck.heading).to.be.equal('W');
            TestDuck.changeHeading('S', 5, 5);
            expect(TestDuck.heading).to.be.equal('N');
        });
        it('moves in open water', () => {
            TestDuck.move(5, 5);
            expect(TestDuck.y).to.be.equal(3);
        });
        it('doesn\'t move at walls', () => {
            TestDuck.changeHeading('P', 5, 5);
            TestDuck.move();
            expect(TestDuck.x).to.be.equal(0);
        });
    });
});
