import {arrayMove} from "../reducerHelper";

describe("arrayMove", () => {
    it("moves an element down one index", () => {
        const startingArray = [1, 2, 3];
        const expectedOutput = [1, 3, 2];
        arrayMove(startingArray, 2, 1);
        expect(startingArray).toEqual(expectedOutput);
    });
    it("moves an element up one index", () => {
        const startingArray = [1, 2, 3];
        const expectedOutput = [2, 1, 3];
        arrayMove(startingArray, 0, 1);
        expect(startingArray).toEqual(expectedOutput);
    });
});