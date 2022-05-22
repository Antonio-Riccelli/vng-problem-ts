"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.piece = exports.Direction = void 0;
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
})(Direction = exports.Direction || (exports.Direction = {}));
;
class Piece {
    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = Direction.N;
    }
    get getCoordinates() {
        console.log(this.coordX, this.coordY, this.direction);
        return `${this.coordX} ${this.coordY} ${this.direction}`;
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
    changeDirection(value) {
        if (value === "R") {
            if (this.direction === "N") {
                this.direction = Direction.E;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "E") {
                this.direction = Direction.S;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "S") {
                this.direction = Direction.W;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "W") {
                this.direction = Direction.N;
                console.log("new direction", this.direction);
                return;
            }
        }
        if (value === "L") {
            if (this.direction === "N") {
                this.direction = Direction.W;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "W") {
                this.direction = Direction.S;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "S") {
                this.direction = Direction.E;
                console.log("new direction", this.direction);
                return;
            }
            if (this.direction === "E") {
                this.direction = Direction.N;
                console.log("new direction", this.direction);
                return;
            }
        }
    }
    processMovement(value) {
        const movementsArray = value.split("");
        console.log(movementsArray);
        movementsArray.forEach(movement => {
            movement = movement.toUpperCase();
            console.log("Movement:", movement);
            if (movement === "M") {
                if (this.direction == Direction.N) {
                    if (this.coordY + 1 > 4) {
                        return;
                    }
                    this.coordY = this.coordY + 1;
                    console.log("Y updated");
                }
                if (this.direction == Direction.E) {
                    if (this.coordX + 1 > 4) {
                        return;
                    }
                    this.coordX = this.coordX + 1;
                    console.log("X updated");
                }
                if (this.direction == Direction.S) {
                    if (this.coordY - 1 < 0) {
                        return;
                    }
                    this.coordY = this.coordY - 1;
                    console.log("Y updated");
                }
                if (this.direction == Direction.W) {
                    if (this.coordX - 1, 0) {
                        return;
                    }
                    this.coordX = this.coordX - 1;
                    console.log("X updated");
                }
            }
            ;
            if (movement === "L" || movement === "R") {
                this.changeDirection(movement);
            }
        });
        console.log("End of function");
        console.log(`${this.coordX} ${this.coordY} ${this.direction}`);
        return `${this.coordX} ${this.coordY} ${this.direction}`;
    }
}
const board = new Board();
exports.piece = new Piece();
