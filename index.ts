class Board {
   readonly board : number[][];

      constructor() {
          this.board =
          [[0, 1, 2, 3, 4], 
           [0, 1, 2, 3, 4], 
           [0, 1, 2, 3, 4], 
           [0, 1, 2, 3, 4], 
           [0, 1, 2, 3, 4]];
      };

      get getBoard() : number[][] {
        console.log(this.board);
        return this.board;
      }
}

class Piece {
    coordX : number;
    coordY : number;
    direction : string;

    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = "North";
    }

    get coordinates() : [number, number, string] {
        console.log(this.coordX, this.coordY, this.direction);
        return [this.coordX, this.coordY, this.direction];
    }

    set setCoordX(value : number) {
        this.coordX = value;
    } 

    set setCoordY(value : number) {
        this.coordY = value;
    }

    set setDirection(value : string) {
        this.direction = value;
    }

    processMovement(value : string) : string {
        const movementsArray : string[] = value.split("");
        console.log(movementsArray);

        return "${}"
    }
}

const board  = new Board();
const piece  = new Piece();
// piece.processMovement(MRMLMRM");

console.log(piece);
piece.processMovement("hghfjd");
