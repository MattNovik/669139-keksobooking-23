import { OFFER_TYPES } from "./data.js";
import { isEscEvent } from "./utils.js";

const renderPhotosList = (placeInsert, data) => {
  const cloneImg = placeInsert.children[0].cloneNode(true); // clone element before deleted
  placeInsert.innerHTML = "";
  data.forEach((real) => {
    const listElement = cloneImg.cloneNode(true);
    listElement.src = real;
    placeInsert.appendChild(listElement);
  });
};

const renderFearutesList = (placeInsert, data) => {
  placeInsert.innerHTML = "";
  data.forEach((real) => {
    const listElement = document.createElement("li");
    listElement.classList.add("popup__feature");
    listElement.classList.add("popup__feature" + "--" + real);
    listElement.textContent = real;
    placeInsert.appendChild(listElement);
  });
};

const renderCard = function (advt, placeInsert) {
  const cardTemplate = document.querySelector("#card").content;
  const similarPopup = cardTemplate.cloneNode(true);
  const clonedElem = similarPopup.cloneNode(true);
  const listFeatures = clonedElem.querySelector(".popup__features");
  const listPhotos = clonedElem.querySelector(".popup__photos");

  clonedElem.querySelector(".popup__avatar").src = advt.author.avatar;
  clonedElem.querySelector(".popup__title").textContent = advt.offer.title;
  clonedElem.querySelector(".popup__text--address").textContent =
    advt.offer.adress;
  clonedElem.querySelector(".popup__text--price").textContent =
    advt.offer.price + " ₽/ночь";
  clonedElem.querySelector(".popup__description").textContent =
    advt.offer.description;

  // create types of advert using object from data.js

  clonedElem.querySelector(".popup__type").textContent =
    OFFER_TYPES[advt.offer.type];

  // dont make check for quantity of guest and rooms

  clonedElem.querySelector(".popup__text--capacity").textContent =
    advt.offer.rooms + " комнаты для " + advt.offer.guests + " гостей";
  clonedElem.querySelector(".popup__text--time").textContent =
    "Заезд после " + advt.offer.checkin + ", выезд до " + advt.offer.checkout;

  renderFearutesList(listFeatures, advt.offer.features);
  renderPhotosList(listPhotos, advt.offer.photos);

  placeInsert.appendChild(clonedElem);
};

const renderDataCards = function (data, placeInsert) {
  data.forEach((advt) => {
    renderCard(advt, placeInsert);
  });
};

const createSuccessMessage = function (placeInsert) {
  const successMessageTemplate = document.querySelector("#success").content;
  const similarMessage = successMessageTemplate.cloneNode(true);
  placeInsert.appendChild(similarMessage);
};

const createErrorMessage = function (placeInsert) {
  const errorMessageTemplate = document.querySelector("#error").content;
  const similarMessage = errorMessageTemplate.cloneNode(true);
  placeInsert.appendChild(similarMessage);
};

const createErrorMessageGet = function () {
  const message = document.createElement('div');
  message.style.zIndex = 100;
  message.style.position = 'absolute';
  message.style.left = 0;
  message.style.top = 0;
  message.style.right = 0;
  message.style.padding = '10px 3px';
  message.style.fontSize = '30px';
  message.style.textAlign = 'center';
  message.style.backgroundColor = 'red';

  message.textContent ="Didn't get information from server";

  document.body.append(message);
};

export { renderCard, renderDataCards, renderFearutesList, renderPhotosList, createSuccessMessage, createErrorMessage, createErrorMessageGet };
