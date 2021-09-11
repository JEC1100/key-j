const formatEnergy = require('./format_audio/energy');
const formatMood = require('./format_audio/mood');
const formatDanceability = require('./format_audio/danceability');

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
