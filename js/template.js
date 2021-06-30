import { renderPhotosList, renderFearutesList } from "./utils.js";
import { OFFER_TYPES } from "./data.js";

const renderCard = function (advt, placeInsert, elemToClone) {
  let clonedElem = elemToClone.cloneNode(true);
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

  let listFeatures = clonedElem.querySelector(".popup__features");
  listFeatures.innerHTML = "";

  let listPhotos = clonedElem.querySelector(".popup__photos");
  listPhotos.innerHTML = "";

  renderFearutesList(listFeatures, advt.offer.features, [
    "li",
    "popup__feature",
  ]);

  renderPhotosList(listPhotos, advt.offer.photos, [
    "img",
    "popup__photo",
    "Фотография жилья",
    "45",
    "40",
  ]);

  placeInsert.appendChild(clonedElem);
};

const renderDataCards = function (dataArray, placeInsert, elemToClone) {
  dataArray.forEach((advt) => {
    renderCard(advt, placeInsert, elemToClone);
  });
};

export { renderCard, renderDataCards };
