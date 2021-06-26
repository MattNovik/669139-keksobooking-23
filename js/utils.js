const getRange = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error("something wrong, check numbers");
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRangeDecimal = (min, max, decimalNumber) => {
  if (min < 0 || min >= max || decimalNumber < 0) {
    throw new Error("something wrong, check numbers");
  }
  return (min + Math.random() * (max + 1 - min)).toFixed(decimalNumber);
};

const getRandomArrayLength = (elements) =>
  elements.slice(0, getRange(0, elements.length));

const getRandomArrayElement = (elements) =>
  elements[getRange(0, elements.length - 1)];

export {
  getRange,
  getRangeDecimal,
  getRandomArrayLength,
  getRandomArrayElement,
};
