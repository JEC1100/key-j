const calculateKeySimilarity = (keyA, keyB, modeA, modeB) => {
  const interval = Math.abs(convertToFifths(keyA, modeA) - convertToFifths(keyB, modeB));
  const percent = (interval > 6 ? interval - 6 : 6 - interval);
  return (Math.round(percent / 6 * 10000) / 100);
};

const convertToFifths = (key, mode) => {
  if(key % 2) { key = key < 6 ? key + 6 : key - 6 }
  return !mode ? key - 3 : key;
};

module.exports = calculateKeySimilarity;
