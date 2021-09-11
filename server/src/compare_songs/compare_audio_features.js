const calculateDifference = require('./calculate_difference');

const compareAudioFeatures = (songA, songB) => {
  return {
    danceability: calculateDifference(songA.danceability, songB.danceability),
    energy: calculateDifference(songA.energy, songB.energy),
    mood: calculateDifference(songA.mood, songB.mood),
    key: calculateDifference(songA.key, songB.key),
  };

};

module.exports = compareAudioFeatures;
