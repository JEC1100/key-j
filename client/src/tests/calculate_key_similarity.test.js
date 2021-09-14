import calculateKeySimilarity from '../helperFunctions/calculate_key_similarity';

describe(calculateKeySimilarity, () => {
  // the intervals in the description of each test are in musical intervals.
  // the input is however as we receive it from spotify, as numbers 0 to 11.
  it('will return 100 when the keys match', () => {
    expect(calculateKeySimilarity(0, 0)).toBe(100)
    expect(calculateKeySimilarity(3, 3)).toBe(100)
    expect(calculateKeySimilarity(8, 8)).toBe(100)
  });

  it('will return 83.33 when the keys are a 4th/5th apart', () => {
    expect(calculateKeySimilarity(0, 7)).toBe(83.33)
    expect(calculateKeySimilarity(4, 9)).toBe(83.33)
    expect(calculateKeySimilarity(0, 5)).toBe(83.33)
  });

  it('will return 66.67 when the keys are flat 7th/2nd apart', () => {
    expect(calculateKeySimilarity(0, 2)).toBe(66.67)
    expect(calculateKeySimilarity(4, 6)).toBe(66.67)
    expect(calculateKeySimilarity(1, 11)).toBe(66.67)
  });

  it('will return 50 when the keys are flat 3rd/6th apart', () => {
    expect(calculateKeySimilarity(0, 9)).toBe(50)
    expect(calculateKeySimilarity(9, 6)).toBe(50)
    expect(calculateKeySimilarity(1, 10)).toBe(50)
  });

  it('will return 33.33 when the keys are flat 6th/3rd apart', () => {
    expect(calculateKeySimilarity(0, 8)).toBe(33.33)
    expect(calculateKeySimilarity(9, 1)).toBe(33.33)
    expect(calculateKeySimilarity(6, 10)).toBe(33.33)
  });

  it('will return 16.67 when the keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 11)).toBe(16.67)
    expect(calculateKeySimilarity(2, 1)).toBe(16.67)
    expect(calculateKeySimilarity(8, 9)).toBe(16.67)
  });

  it('will return 0 when the keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 6)).toBe(0)
    expect(calculateKeySimilarity(10, 4)).toBe(0)
    expect(calculateKeySimilarity(8, 2)).toBe(0)
  });
});
