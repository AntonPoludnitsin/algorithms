import { binary_search } from "../binarySearch";

describe("binary_search", () => {
    it("should return correct value", () => {
        expect(binary_search([], 5)).toBe(-1);
        expect(binary_search([1], 1)).toBe(0);
        expect(binary_search([1, 5], 1)).toBe(0);
        expect(binary_search([1, 5, 7, 9, 23, 67, 100], 5)).toBe(1);
        expect(binary_search([1, 5, 7, 9, 23, 67, 100], 67)).toBe(5);
        expect(binary_search([1, 5, 7, 9, 23, 67, 100], 50)).toBe(-1);
    });
});
