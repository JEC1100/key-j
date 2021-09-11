const compareSongs = require('../../src/compare_songs/calculate_difference');

describe('Caluclating difference', () => {
  it('returns the match between two numbers', () => {
    expect(compareSongs(25, 75)).toEqual(33);
    expect(compareSongs(1, 1)).toEqual(100);
    expect(compareSongs(1, 0.5)).toEqual(50);
  });
});
