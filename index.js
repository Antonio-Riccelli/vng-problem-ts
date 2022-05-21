"use strict";
class Board {
    constructor() {
        this.board = [[0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4]];
    }
}
class Piece {
    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = "North";
    }
}
const board = new Board();
const piece = new Piece();
console.log(piece);
