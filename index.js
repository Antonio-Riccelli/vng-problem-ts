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
class Piece {
    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = "North";
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
    processMovement(value) {
        const movementsArray = value.split("");
        console.log(movementsArray);
        return "${}";
    }
}
const board = new Board();
const piece = new Piece();
// piece.processMovement(MRMLMRM");
console.log(piece);
piece.processMovement("hghfjd");
