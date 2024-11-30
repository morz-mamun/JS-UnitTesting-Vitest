import { describe, test, it, expect } from "vitest";
import { max } from "../Functions/intro";

describe("max", () => {
    it("should return the first argument if it is greater than the second", () => {
        // // AAA -> testing pattern
        // // Arrange : Setup the test environment
        // const a = 10;
        // const b = 5;
        // // Act : Perform the action we want to test
        // const result = max(a, b);
        // // Assert: Check the result of the test as expected
        // expect(result).toBe(10);

        // best practice
        expect(max(10, 5)).toBe(10);
        
    })
})