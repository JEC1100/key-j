const formatEnergy = require('./energy');
const formatMood = require('./mood');
const formatDanceability = require('./danceability');
const formatKey = require('./key');

const formatAudioFeatures = (features) => {
  return {
    danceability: formatDanceability(features.danceability),
    energy: formatEnergy(features.energy),
    tempo: features.tempo,
    mood: formatMood(features.valence),
    key: formatKey(features.key),
  };
};


module.exports = formatAudioFeatures;
