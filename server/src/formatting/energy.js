const formatEnergy = (value) => {
  if (value < 0.3) {
    return 'Low';
  } else if (value < 0.6) {
    return 'Medium';
  } else if (value < 0.9) {
    return 'High';
  } else {
    return 'VERY HIGH';
  }
};

module.exports = formatEnergy;
