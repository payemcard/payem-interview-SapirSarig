import { isLettersOnly, isNumber, isInLengthRange } from "../utils/inputValidations.util.js";

describe('Utility Functions', () => {

    describe('isNumber', () => {
        test('should return true for a number', () => {
            expect(isNumber(123)).toBe(true);
        });

        test('should return false for a non-number', () => {
            expect(isNumber('string')).toBe(false);
            expect(isNumber(NaN)).toBe(false);
        });
    });

    describe('isLettersOnly', () => {
        test('should return true for a string with only letters', () => {
            expect(isLettersOnly('abc')).toBe(true);
            expect(isLettersOnly('ABC')).toBe(true);
            expect(isLettersOnly('AbC')).toBe(true);
        });

        test('should return false for a string with numbers or special characters', () => {
            expect(isLettersOnly('abc123')).toBe(false);
            expect(isLettersOnly('abc!')).toBe(false);
            expect(isLettersOnly('123')).toBe(false);
        });

        test('should return false for an empty string', () => {
            expect(isLettersOnly('')).toBe(false);
        });
    });

    describe('isInLengthRange', () => {
        test('should return true for a string within the length range', () => {
            expect(isInLengthRange('hello', 1, 10)).toBe(true);
            expect(isInLengthRange('hi', 1, 10)).toBe(true);
        });

        test('should return false for a string outside the length range', () => {
            expect(isInLengthRange('hello', 6, 10)).toBe(false);
            expect(isInLengthRange('hi', 1, 1)).toBe(false);
        });

        test('should return false for an empty string if minLength > 0', () => {
            expect(isInLengthRange('', 1, 10)).toBe(false);
        });
    });
});
