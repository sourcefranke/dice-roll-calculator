import {describe, expect, test} from '@jest/globals';
import { interpret } from './DiceRollCalculator'

describe('calculate', () => {
    test.each([
        ['d6', 1, 6],
        ['d4', 1, 4],
    ])('one die', (formula, min, max) => {
        // Act
        const result = interpret(formula).calculate();
        // Assert
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test.each([
        ['5', 5],
        ['1253', 1253],
    ])('single number', (s, n) => {
        // Act
        const result = interpret(s).calculate();
        // Assert
        expect(result).toBe(n);
    });

    test.each([
        ['5 + 9', 14],
        ['16 + 7', 23],
        ['18 + 10 + 6', 34],
    ])('addition', (s, n) => {
        // Act
        const result = interpret(s).calculate();
        // Assert
        expect(result).toBe(n);
    });

    test.each([
        ['1d10', 1, 10],
        ['2d6', 2, 12],
        ['3d20', 3, 60],
    ])('multiple dice', (formula, min, max) => {
        // Act
        const result = interpret(formula).calculate();
        // Assert
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test.each([
        ['d6 + 1', 2, 7],
        ['d20 + 5', 6, 25],
        ['2d20 + 5', 7, 45],
    ])('combinations', (formula, min, max) => {
        // Act
        const result = interpret(formula).calculate();
        // Assert
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});
