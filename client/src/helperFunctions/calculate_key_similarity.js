const calculateKeySimilarity = (keyA, keyB) => {
  const convertOdds = {
    1: 7,
    3: 9,
    5: 11,
    7: 1,
    9: 3,
    11: 5,
  };
  if(keyA % 2) { keyA = convertOdds[keyA]}
  if(keyB % 2) { keyB = convertOdds[keyB]}
  const interval = Math.abs(keyA - keyB);
  const percent = Math.abs((interval > 6 ? 6 - interval : interval - 6));
  return (Math.round(percent / 6 * 10000) / 100);
};

module.exports = calculateKeySimilarity;
