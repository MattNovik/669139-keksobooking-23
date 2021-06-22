import {getRange} from './getRandomNumb.js';

const getRandomArrayElement = (elements) =>
  elements[getRange(0, elements.length - 1)];

export {getRandomArrayElement};
