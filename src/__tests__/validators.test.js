const { isAdult, getDiscount } = require('../utils/validators');

describe('isAdult', () => {
  test('returns true for age >= 18', () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(25)).toBe(true);
  });

  test('returns false for age < 18', () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(0)).toBe(false);
  });

  test('returns false for non-numeric values', () => {
    expect(isAdult('18')).toBe(false);
    expect(isAdult(null)).toBe(false);
    expect(isAdult(undefined)).toBe(false);
    expect(isAdult({})).toBe(false);
  });

  test('returns false for NaN and Infinity', () => {
    expect(isAdult(NaN)).toBe(false);
    expect(isAdult(Infinity)).toBe(false);
    expect(isAdult(-Infinity)).toBe(false);
  });
});

describe('getDiscount', () => {
  test('applies discount for VIP with price >= 100', () => {
    expect(getDiscount(100, true)).toBe(10);
    expect(getDiscount(150, true)).toBe(15);
  });

  test('does not apply discount for VIP with price < 100', () => {
    expect(getDiscount(99.99, true)).toBe(0);
    expect(getDiscount(50, true)).toBe(0);
  });

  test('no discount for non-VIP', () => {
    expect(getDiscount(100, false)).toBe(0);
    expect(getDiscount(1000, false)).toBe(0);
  });

  test('returns 0 for invalid price values', () => {
    expect(getDiscount(-1, true)).toBe(0);
    expect(getDiscount(NaN, true)).toBe(0);
    expect(getDiscount(Infinity, true)).toBe(0);
    expect(getDiscount('100', true)).toBe(0);
    expect(getDiscount(null, true)).toBe(0);
    expect(getDiscount(undefined, true)).toBe(0);
  });

  test('handles non-boolean isVip safely', () => {
    expect(getDiscount(100, 'true')).toBe(10);
    expect(getDiscount(100, 1)).toBe(10);
    expect(getDiscount(100, 0)).toBe(0);
  });
});
