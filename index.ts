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

export enum Direction {
    N = "N",
    S = "S",
    E = "E",
    W = "W"
};

 class Piece {
    coordX : number;
    coordY : number;
    direction : Direction;

    constructor() {
        this.coordX = 0;
        this.coordY = 0;
        this.direction = Direction.N;
    }

    get getCoordinates() : string {
        console.log(this.coordX, this.coordY, this.direction);
        return `${this.coordX} ${this.coordY} ${this.direction}`;
    }

    set setCoordX(value : number) {
        this.coordX = value;
    } 

    set setCoordY(value : number) {
        this.coordY = value;
    }

    set setDirection(value : Direction) {
        this.direction = value;
    }

    changeDirection(value : string) {
        if (value === "R") {
            if (this.direction === "N") {
                this.direction = Direction.E;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "E") {
                this.direction = Direction.S;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "S") {
                this.direction = Direction.W;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "W") {
                this.direction = Direction.N;
                console.log("new direction", this.direction);
                return
            }
        }

        if (value === "L") {
            if (this.direction === "N") {
                this.direction = Direction.W;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "W") {
                this.direction = Direction.S;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "S") {
                this.direction = Direction.E;
                console.log("new direction", this.direction);
                return
            }
            if (this.direction === "E") {
                this.direction = Direction.N;
                console.log("new direction", this.direction);
                return
            }
        }
    }

    processMovement(value : string) : string {
        const movementsArray : string[] = value.split("");
        console.log(movementsArray);
        movementsArray.forEach(movement => {
          
            movement = movement.toUpperCase();
            console.log("Movement:", movement);
            if (movement === "M") {
        
                if (this.direction == Direction.N) {
                    if (this.coordY + 1 > 4) {
                        return
                    }
                    this.coordY = this.coordY + 1;
                    console.log("Y updated")
                }
                
                if (this.direction == Direction.E) {
                    if (this.coordX + 1 > 4) {
                        return
                    }
                    this.coordX = this.coordX + 1;
                    console.log("X updated")
                }

                if (this.direction == Direction.S) {
                    if (this.coordY - 1 < 0) {
                        return
                    }
                    this.coordY = this.coordY - 1;
                    console.log("Y updated")
                }

                if (this.direction == Direction.W) {
                    if (this.coordX - 1 , 0) {
                        return
                    }
                    this.coordX = this.coordX - 1;
                    console.log("X updated")
                }
            };

            if (movement === "L" || movement === "R") {
                this.changeDirection(movement);
                
            }
          
        })
        console.log("End of function");
        console.log(`${this.coordX} ${this.coordY} ${this.direction}`);
        return `${this.coordX} ${this.coordY} ${this.direction}`;
    }
   
}

const board  = new Board();
export const piece  = new Piece();

