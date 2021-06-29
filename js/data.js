import {
  getRange,
  getRangeDecimal,
  getRandomArrayLength,
  getRandomArrayElement,
} from "./utils.js";

const TYPE = ["palace", "flat", "house", "bungalow", "hotel"];
const CHECKIN = ["12:00", "13:00", "14:00"];
const CHECKOUT = ["12:00", "13:00", "14:00"];
const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const getData = (item, index, ar) => {
  const locationX = getRangeDecimal(35.65, 35.7, 5);
  const locationY = getRangeDecimal(139.7, 139.8, 5);
  const indexType = index + 1 != 10 ? "0" + (index + 1) : index + 1; // для добавления 0 если номер меньше 10 и увеличения на 1

  return {
    location: {
      lat: locationX,
      lng: locationY,
    },
    author: {
      avatar: "img/avatars/user" + indexType + ".png",
    },

    offer: {
      title: "New hotel for you",
      adress: locationX + "," + locationY,
      price: getRange(1, 100000),
      type: getRandomArrayElement(TYPE),
      rooms: getRange(1, 10),
      guests: getRange(1, 15),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayLength(FEATURES),
      description: "one of the best room",
      photos: getRandomArrayLength(PHOTOS),
    },
  };
};

export { getData };
