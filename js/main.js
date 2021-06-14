const getRange = (min, max) => {
  if (min < 0 || min >= max) {
   throw new Error('something wrong, check numbers');
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRangeDecimal = (min, max, decimalNumber) => {
  if (min < 0 || min >= max || decimalNumber < 0) {
   throw new Error('something wrong, check numbers');
  }
  return (min + Math.random() * (max + 1 - min)).toFixed(decimalNumber);
};

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT= ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomImgNumber = function (min,max){
  let imgNumber = getRange(min,max)
  return imgNumber != 10 ? '0'+ String(imgNumber) : String(imgNumber);
};

const getRandomArrayElement = (elements) => {
  return elements[getRange(0, elements.length - 1)];
};

//копирую просто элементы по порядку, если бы была необходимость в разной последовательности их заносить, пришлось бы запускать
//поиск рандомного ээлемента, так же как в случае с фотографией

const getRandomFeatures = (elements) => {
  let numberOfFeatures = getRange(0, elements.length - 1);
  let copyArray = elements.slice(0, elements.length - 1);
  let newArray = [];
  for (let i = 0, k = 0; i < numberOfFeatures;i++) {
    newArray.push(copyArray[k])
    copyArray.splice(k,1);
  }
  return newArray;
};

const getRandomPhotos = (elements, max) => {
  let numberOfPhotos = getRange(0, max);
  let newArray = [];
  for (let i = 0; i < numberOfPhotos;i++) {
    let k = getRange(0,elements.length - 1);
    newArray.push(elements[k])
  }
  return newArray;
};

const getProppertyFromObjLat =  (location) => {
  return String(location.lat);
}

const  getProppertyFromObjLng = (location) => {
  return String(location.lng);
}

const author = {
  avatar: 'img/avatars/user' + getRangdomImgNumber(0,10) + '.png',
};

const offer = {
  title: 'New hotel for you',
  adress: getProppertyFromObjLat(location) + ',' + getProppertyFromObjLng(location,lng),
  price: getRange(1,100000),
  type: getRandomArrayElement(TYPE),
  rooms: getRange(1,10),
  guests: getRange(1,15),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getRandomFeatures(FEATURES),
  description: 'one of the best room',
  photos: getRandomPhotos(PHOTOS),
};

const location = {
  lat: getRangeDecimal(35.6500, 35.70000, 5),
  lng: getRangeDecimal(139.70000, 139.80000, 5),
};
