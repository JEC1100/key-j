const formatKey = (value, mode) => {
  const musicalKey = {
    0: 'C',
    1: 'C#/Db',
    2: 'D',
    3: 'D#/Eb',
    4: 'E',
    5: 'F',
    6: 'F#Gb',
    7: 'G',
    8: 'G#/Ab',
    9: 'A',
    10: 'A#/Bb',
    11: 'B'
  };

  return musicalKey[value] + (mode ? ' maj' : ' min');
};

module.exports = formatKey;
