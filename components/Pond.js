const Duck = require('./Duck.js');

class Pond {
    constructor(x, y, inputArr) {
        this.xMax = x;
        this.yMax = y;
        this.input = inputArr;
        this.ducks = [];
        this.finalPositions = [];

        this.moveDucks();
    }

    // Creates new Duck instance for each duck and moves to final positions
    moveDucks() {
        let inputIdx = 0;
        while (inputIdx < this.input.length) {
            const initialPos = this.input[inputIdx];
            const moves = this.input[inputIdx + 1][0].trim();
            let newDuck = new Duck(initialPos, moves);

            this.finalPositions.push(newDuck.getFinalPos(this.xMax, this.yMax));
            console.log(newDuck.finalPos);
            this.ducks.push(newDuck);

            inputIdx += 2;
        }
    }
}

module.exports = Pond;
