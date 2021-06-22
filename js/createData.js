import {TYPE, CHECKIN, CHECKOUT, FEATURES, PHOTOS} from './data.js';
import {getRange} from './getRandomNumb.js';
import {getRangeDecimal} from './getRandomDecimalumb.js';
import {getRandomArrayLength} from './getRandomArrayLength.js';
import {getRandomArrayElement} from './getRandomArrayElement.js';

const getData = (item, index, ar) => {
  const locationX = getRangeDecimal(35.65, 35.7, 5);
  const locationY = getRangeDecimal(139.7, 139.8, 5);
  const index = index + 1 != 10 ? '0' + (index + 1) : index + 1; // для добавления 0 если номер меньше 10 и увеличения на 1

  return {
    location: {
      lat: locationX,
      lng: locationY,
    },
    author: {
      avatar: 'img/avatars/user' + index + '.png',
    },

    offer: {
      title: 'New hotel for you',
      adress: locationX + ',' + locationY,
      price: getRange(1, 100000),
      type: getRandomArrayElement(TYPE),
      rooms: getRange(1, 10),
      guests: getRange(1, 15),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayLength(FEATURES),
      description: 'one of the best room',
      photos: getRandomArrayLength(PHOTOS),
    },
  };
};

export {getData};
