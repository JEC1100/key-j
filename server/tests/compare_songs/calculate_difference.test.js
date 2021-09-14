const calculateSimilarity =
require('../../src/compare_songs/calculate_difference');

describe('Caluclating difference', () => {
  it('returns the match between two numbers', () => {
    expect(calculateSimilarity(25, 75)).toEqual(33);
    expect(calculateSimilarity(1, 1)).toEqual(100);
    expect(calculateSimilarity(1, 0.5)).toEqual(50);
  });
});
