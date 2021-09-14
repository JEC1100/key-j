const calculateDifference = require('./calculate_difference');
const compareTempo = require('./tempo');

const compareAudioFeatures = (songA, songB) => {
  return {
    danceability: calculateDifference(songA.danceability, songB.danceability),
    energy: calculateDifference(songA.energy, songB.energy),
    mood: calculateDifference(songA.valence, songB.valence),
    key: calculateDifference(songA.key, songB.key),
    tempo: compareTempo(songA.tempo, songB.tempo),
  };

};

module.exports = compareAudioFeatures;
