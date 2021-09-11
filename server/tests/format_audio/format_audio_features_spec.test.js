const formatAudioFeatures =
require('../../src/formatting/format_audio_features');

let audioFeatures = {
  danceability: 1,
  energy: 0.34,
  tempo: 160,
  mood: 0.86,
  key: 5,
  mode: 0,
};

describe('formatting audio features', () => {
  it('returns formatted values and keeps some the same', () => {
    let result = formatAudioFeatures(audioFeatures);
    expect(result.danceability).toEqual('Boogy baby!!');
    expect(result.energy).toEqual('Medium');
    expect(result.tempo).toEqual(160);
    expect(result.mood).toEqual(':D');
    expect(result.key).toEqual(5);
    expect(result.mode).toEqual(0);
  });
});
