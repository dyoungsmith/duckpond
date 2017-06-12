const modulo = require('../utils/modulo.js');   // modulo(i, l, dir)

class Duck {
    constructor(initialPos, moves) {
        this.x = Number(initialPos[0]);
        this.y = Number(initialPos[1]);

        this.dirs = ['N', 'E', 'S', 'W'];
        this.heading = initialPos[2];
        this.headingIdx = this.dirs.indexOf(this.heading);

        this.moves = moves;
        this.finalPos = '';
    }

    // Moves forward one space in direction of heading
    // If at an edge, don't move
    move(xMax, yMax) {
        if (this.heading === 'N' && this.y < yMax) {
            this.y++;
        }
        else if (this.heading === 'S' && this.y > 0) {
            this.y--;
        }
        else if (this.heading === 'W' && this.x > 0) {
            this.x--;
        }
        else if (this.heading === 'E' && this.x < xMax) {
            this.x++;
        }
    }

    // Updates heading and headingIdx for P/S rotations
    changeHeading(dir, xMax, yMax) {
        if (dir === 'F') this.move(xMax, yMax);
        else {
            this.headingIdx = modulo(this.headingIdx, this.dirs.length, dir);
            this.heading = this.dirs[this.headingIdx];
        }
    }

    getFinalPos(xMax, yMax) {
        if (this.finalPos.length) return this.finalPos;
        for (let i = 0; i < this.moves.length; i++) {
            this.changeHeading(this.moves.charAt(i), xMax, yMax);
        }
        this.finalPos = `${this.x} ${this.y} ${this.heading}`;
        return this.finalPos;
    }
}

module.exports = Duck;
