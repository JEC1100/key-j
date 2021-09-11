const formatMood = (value) => {
  if (value < 0.2) {
    return ":'(";
  } else if (value < 0.4) {
    return ':(';
  } else if (value < 0.6) {
    return ':|';
  } else if (value < 0.8) {
    return ':)';
  } else {
    return ':D';
  }
};

module.exports = formatMood;
