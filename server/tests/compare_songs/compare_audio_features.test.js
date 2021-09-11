const compareSongs = require('../../src/compare_songs/compare_audio_features');

let songA = {
  danceability: 1,
  energy: 0.9,
  tempo: 100,
  mood: 0.3,
  key: 9,
  mode: 1,
};

let songB = {
  danceability: 1,
  energy: 0.34,
  tempo: 160,
  mood: 0.86,
  key: 5,
  mode: 0,
};

describe('Caluclating difference', () => {
  it('returns the match between two numbers', () => {
    let comparison = compareSongs(songA, songB);
    expect(comparison.danceability).toEqual(100);
    expect(comparison.energy).toEqual(38);
    expect(comparison.mood).toEqual(35);
    expect(comparison.key).toEqual(56);
  });
});
