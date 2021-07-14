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

const isEscEvent = (evt) => {
  return evt.key === "Escape" || evt.key === "Esc";
};

const isEnterEvent = (evt) => {
  return evt.key === "Enter";
};

const debounce = (func, time) => {
  let timer;
  return function debounced() {
    clearTimeout(timer);
    let args = arguments;
    let that = this;
    timer = setTimeout(function callOriginalFn() {
      func.apply(that, args);
    }, time);
  };
};

export {
  getRange,
  getRangeDecimal,
  getRandomArrayLength,
  getRandomArrayElement,
  isEscEvent,
  isEnterEvent,
  debounce,
};
