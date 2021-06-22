import {getRange} from './getRandomNumb.js';

const getRandomArrayLength = (elements) =>
  elements.slice(0, getRange(0, elements.length));

export {getRandomArrayLength}
