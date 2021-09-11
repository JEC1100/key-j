const calculateDifference = (a, b) => {
  let smallestNumber = Math.min(a, b);
  let largestNumber = Math.max(a, b);

  let difference = ((largestNumber - smallestNumber) / largestNumber) * 100;
  let similarity = 100 - difference;

  return Math.round(similarity);
};

module.exports = calculateDifference;
