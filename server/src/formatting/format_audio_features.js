const formatEnergy = require('./energy');
const formatMood = require('./mood');
const formatDanceability = require('./danceability');

const formatAudioFeatures = (features) => {
  return {
    danceability: formatDanceability(features.danceability),
    energy: formatEnergy(features.energy),
    tempo: features.tempo,
    mood: formatMood(features.valence),
    key: features.key,
    mode: features.mode,
  };
};


module.exports = formatAudioFeatures;
