import {piece} from "../index";
import {Direction} from "../index";

describe("Movement", function() {
    it("returns '2 2 E' if input is 'MRMLMRM'", function() {
        // SETUP
        const input = "MRMLMRM";
        const expected = "2 2 E";

        // EXERCISE
        const actual = piece.processMovement(input);
        // console.log("actual", actual);
        // VERIFY
        expect(actual).toBe(expected);

        // TEARDOWN
        piece.setCoordX = 0;
        piece.setCoordY = 0;
        piece.setDirection = Direction.N;
    });

    it ("returns '3 2 N' if input is 'RMMMLMM'", function() {
        // SETUP
        const input = "RMMMLMM";
        const expected = "3 2 N";

        // EXERCISE
        const actual = piece.processMovement(input);

        // VERIFY
        expect(actual).toBe(expected);

        // TEARDOWN
        piece.setCoordX = 0;
        piece.setCoordY = 0;
        piece.setDirection = Direction.N;
    });

    it ("returns '0 4 N' if input is 'MMMMM'", function() {
        // SETUP
        const input = "MMMMM";
        const expected = "0 4 N";

        // EXERCISE
        const actual = piece.processMovement(input);

        // VERIFY
        expect(actual).toBe(expected);

         // TEARDOWN
         piece.setCoordX = 0;
         piece.setCoordY = 0;
         piece.setDirection = Direction.N;
    })
})