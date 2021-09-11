const compareTempo = (songA, songB) => {

  let percentage = songA * 0.04;

  let firstNum = songA - percentage;
  let secondNum = songA + percentage;

  if (songB > firstNum && songB < secondNum) {
    return 'Good tempo match!';
  } else {
    return 'Not a great tempo match';
  }

};

module.exports = compareTempo;
