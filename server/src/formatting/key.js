const formatKey = (value) => {
  if (value === 0) {
    return 'C';
  } else if (value === 1) {
    return 'C#/Db';
  } else if (value === 2) {
    return 'D';
  } else if (value === 3) {
    return 'D#/Eb';
  } else if (value === 4) {
    return 'E';
  } else if (value === 5) {
    return 'F';
  } else if (value === 6) {
    return 'F#Gb';
  } else if (value === 7) {
    return 'G';
  } else if (value === 8) {
    return 'G#/Ab';
  } else if (value === 9) {
    return 'A';
  } else if (value === 10) {
    return 'A#/Bb';
  } else {
    return 'B';
  }
};

module.exports = formatKey;
