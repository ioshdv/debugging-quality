const { isAdult, getDiscount } = require('../utils/validators');

describe('isAdult', () => {
  test('returns true for age >= 18', () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(25)).toBe(true);
  });

  test('returns false for age < 18', () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(10)).toBe(false);
  });

  test('returns false for invalid age', () => {
    expect(isAdult('18')).toBe(false);
    expect(isAdult(NaN)).toBe(false);
  });
});

describe('getDiscount', () => {
  test('applies discount for VIP', () => {
    expect(getDiscount(100, true)).toBe(10);
  });

  test('no discount for non-VIP', () => {
    expect(getDiscount(100, false)).toBe(0);
  });

  test('returns 0 for invalid price', () => {
    expect(getDiscount(-1, true)).toBe(0);
    expect(getDiscount('100', true)).toBe(0);
    expect(getDiscount(NaN, true)).toBe(0);
  });
});
