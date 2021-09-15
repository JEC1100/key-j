import calculateKeySimilarity from '../helperFunctions/calculate_key_similarity';

describe(calculateKeySimilarity, () => {
  // the intervals in the description of each test are in musical intervals.
  // the input is however as we receive it from spotify, as numbers 0 to 11.
  // the third and fourth parameters are the mode of each key (1 being major and 0 being minor)
  it('will return 100 when the keys match', () => {
    expect(calculateKeySimilarity(0, 0, 1, 1)).toBe(100)
  });

  it('will return 83.33 when the keys are a 4th/5th apart', () => {
    expect(calculateKeySimilarity(0, 7, 1, 1)).toBe(83.33)
  });

  it('will return 66.67 when the keys are flat 7th/2nd apart', () => {
    expect(calculateKeySimilarity(0, 2, 1, 1)).toBe(66.67)
  });

  it('will return 50 when the keys are flat 3rd/6th apart', () => {
    expect(calculateKeySimilarity(0, 9, 1, 1)).toBe(50)
  });

  it('will return 33.33 when the keys are flat 6th/3rd apart', () => {
    expect(calculateKeySimilarity(0, 8, 1, 1)).toBe(33.33)
  });

  it('will return 16.67 when the keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 11, 1, 1)).toBe(16.67)
  });

  it('will return 0 when the keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 6, 1, 1)).toBe(0)
  });

  it('will return 100 when the keys are relative major and minor', () => {
    expect(calculateKeySimilarity(0, 9, 1, 0)).toBe(100)
  });

  it('will return 83.33 when the relative keys are a 4th/5th apart', () => {
    expect(calculateKeySimilarity(0, 4, 1, 0)).toBe(83.33)
  });

  it('will return 66.67 when the relative keys are flat 7th/2nd apart', () => {
    expect(calculateKeySimilarity(0, 11, 1, 0)).toBe(66.67)
  });

  it('will return 50 when the relative keys are flat 3rd/6th apart', () => {
    expect(calculateKeySimilarity(0, 6, 1, 0)).toBe(50)
  });

  it('will return 33.33 when the relative keys are flat 6th/3rd apart', () => {
    expect(calculateKeySimilarity(0, 1, 1, 0)).toBe(33.33)
  });

  it('will return 16.67 when the relative keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 8, 1, 0)).toBe(16.67)
  });

  it('will return 0 when the relative keys are flat 2nd/7th apart', () => {
    expect(calculateKeySimilarity(0, 3, 1, 0)).toBe(0)
  });
});
