let range = (min,max) => {
  if (min < 0) {
    return 'too small min';
  } else if (min > max) {
    return 'wrong numbers min more than max, try again';
  }
  let number  = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}
