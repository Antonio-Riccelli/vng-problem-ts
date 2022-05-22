"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const index_2 = require("../index");
describe("Movement", function () {
    it("returns '2 2 E' if input is 'MRMLMRM'", function () {
        // SETUP
        const input = "MRMLMRM";
        const expected = "2 2 E";
        // EXERCISE
        const actual = index_1.piece.processMovement(input);
        // VERIFY
        expect(actual).toBe(expected);
        // TEARDOWN
        index_1.piece.setCoordX = 0;
        index_1.piece.setCoordY = 0;
        index_1.piece.setDirection = index_2.Direction.N;
    });
    it("returns '3 2 N' if input is 'RMMMLMM'", function () {
        // SETUP
        const input = "RMMMLMM";
        const expected = "3 2 N";
        // EXERCISE
        const actual = index_1.piece.processMovement(input);
        // VERIFY
        expect(actual).toBe(expected);
        // TEARDOWN
        index_1.piece.setCoordX = 0;
        index_1.piece.setCoordY = 0;
        index_1.piece.setDirection = index_2.Direction.N;
    });
    it("returns '0 4 N' if input is 'MMMMM'", function () {
        // SETUP
        const input = "MMMMM";
        const expected = "0 4 N";
        // EXERCISE
        const actual = index_1.piece.processMovement(input);
        // VERIFY
        expect(actual).toBe(expected);
        // TEARDOWN
        index_1.piece.setCoordX = 0;
        index_1.piece.setCoordY = 0;
        index_1.piece.setDirection = index_2.Direction.N;
    });
});
