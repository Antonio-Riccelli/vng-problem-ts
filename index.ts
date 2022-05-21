class Board {
    board : number[][] =
     [[0, 1, 2, 3, 4], 
      [0, 1, 2, 3, 4], 
      [0, 1, 2, 3, 4], 
      [0, 1, 2, 3, 4], 
      [0, 1, 2, 3, 4]];
}

class Piece {
    coordX : number = 0;
    coordY : number = 0;
    direction : string = "North";
}

const board : object = new Board();
const piece : object = new Piece();

console.log(piece);
