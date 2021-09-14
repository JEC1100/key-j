const formatDanceability = (value) => {
  if (value < 0.2) {
    return 'Time for bed';
  } else if (value < 0.4) {
    return 'Chill';
  } else if (value < 0.6) {
    return 'In the middle';
  } else if (value < 0.8) {
    return 'Warming up';
  } else {
    return 'Boogy baby!!';
  }
};

module.exports = formatDanceability;
