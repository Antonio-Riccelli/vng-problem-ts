"use strict";
class Board {
    constructor() {
        this.board =
            [[0, 1, 2, 3, 4],
                [0, 1, 2, 3, 4],
                [0, 1, 2, 3, 4],
                [0, 1, 2, 3, 4],
                [0, 1, 2, 3, 4]];
    }
    ;
    get getBoard() {
        console.log(this.board);
        return this.board;
    }
}
var Direction;
(function (Direction) {
    Direction["N"] = "N";
    Direction["S"] = "S";
    Direction["E"] = "E";
    Direction["W"] = "W";
})(Direction || (Direction = {}));
;
class Piece {
    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = Direction.N;
    }
    get coordinates() {
        console.log(this.coordX, this.coordY, this.direction);
        return [this.coordX, this.coordY, this.direction];
    }
    set setCoordX(value) {
        this.coordX = value;
    }
    set setCoordY(value) {
        this.coordY = value;
    }
    set setDirection(value) {
        this.direction = value;
    }
    isValidMovement() {
        if (this.coordX + 1 > 4 ||
            this.coordY + 1 > 4 ||
            this.coordX - 1 < 0 ||
            this.coordY - 1 < 0) {
            return false;
        }
        return true;
    }
    changeDirection(value) {
        if (value === "R") {
            if (this.direction === "N") {
                this.direction = Direction.E;
            }
            if (this.direction === "E") {
                this.direction = Direction.S;
            }
            if (this.direction === "S") {
                this.direction = Direction.W;
            }
            if (this.direction === "W") {
                this.direction = Direction.N;
            }
        }
        if (value === "L") {
            if (this.direction === "N") {
                this.direction = Direction.W;
            }
            if (this.direction === "W") {
                this.direction = Direction.S;
            }
            if (this.direction === "S") {
                this.direction = Direction.E;
            }
            if (this.direction === "E") {
                this.direction = Direction.N;
            }
        }
    }
    processMovement(value) {
        const movementsArray = value.split("");
        console.log(movementsArray);
        movementsArray.forEach(movement => {
            movement = movement.toUpperCase();
            if (movement === "M") {
                if (this.direction == Direction.N && this.isValidMovement()) {
                    this.coordY = this.coordY + 1;
                }
                if (this.direction == Direction.E && this.isValidMovement()) {
                    this.coordX = this.coordX + 1;
                }
                if (this.direction == Direction.S && this.isValidMovement()) {
                    this.coordY = this.coordY - 1;
                }
                if (this.direction == Direction.W && this.isValidMovement()) {
                    this.coordX = this.coordX - 1;
                }
            }
            ;
            if (movement === "L" || movement === "R") {
                this.changeDirection(movement);
            }
        });
        return "${}";
    }
}
const board = new Board();
const piece = new Piece();
// piece.processMovement(MRMLMRM");
console.log(piece);
piece.processMovement("hghfjd");
