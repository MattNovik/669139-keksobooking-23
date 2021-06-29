import { createData } from "./main.js";

const cardTemplate = document.querySelector("#card").content;
const similarPopup = cardTemplate.cloneNode(true);
const popupMass = createData();

popupMass.forEach((advt) => {
  let popup = similarPopup.cloneNode(true);
  popup.querySelector(".popup__avatar").src = advt.author.avatar;
  popup.querySelector(".popup__title").textContent = advt.offer.title;
  popup.querySelector(".popup__text--address").textContent = advt.offer.adress;
  popup.querySelector(".popup__text--price").textContent =
    advt.offer.price + " ₽/ночь";

  // create types of advert using object

  const offerTypes = {
    flat: "Квартира",
    bungalow: "Бунгало",
    house: "Дом",
    palace: "Дворец",
    hotel: "Отель",
  };
  popup.querySelector(".popup__type").textContent = offerTypes[advt.offer.type];

  // dont make check for quantity of guest and rooms

  popup.querySelector(".popup__text--capacity").textContent =
    advt.offer.rooms + " комнаты для " + advt.offer.guests + " гостей";
  popup.querySelector(".popup__text--time").textContent =
    "Заезд после " + advt.offer.checkin + ", выезд до " + advt.offer.checkout;

  // delete template elements from ul and create new element from data (offer.features)

  let listFeatures = popup.querySelector(".popup__features");
  let features = listFeatures.querySelectorAll(".popup__feature");
  for (let feat of features) {
    feat.remove();
  }
  let realFeatures = advt.offer.features;
  for (let realFeat of realFeatures) {
    let listFeaturesElement = document.createElement("li");
    listFeaturesElement.classList.add("popup__feature");
    listFeaturesElement.classList.add("popup__feature--" + realFeat);
    listFeaturesElement.textContent = realFeat;
    listFeatures.appendChild(listFeaturesElement);
  }

  popup.querySelector(".popup__description").textContent =
    advt.offer.description;

  // delete template elements from photos and create new element from data (offer.photos)

  let listPhotos = popup.querySelector(".popup__photos");
  let photos = listPhotos.querySelectorAll(".popup__photo");
  for (let photo of photos) {
    photo.remove();
  }
  let realPhotos = advt.offer.photos;
  for (let realPhoto of realPhotos) {
    let listPhotoElement = document.createElement("img");
    listPhotoElement.classList.add("popup__photo");
    listPhotoElement.alt = "Фотография жилья";
    listPhotoElement.src = realPhoto;
    listPhotoElement.width = "45";
    listPhotoElement.height = "40";
    listPhotos.appendChild(listPhotoElement);
  }
});
