import { renderFearutesList, renderPhotosList } from "./template.js";

const createPopup = (opt) => {
  const balloonTemplate = document
    .querySelector("#card")
    .content.querySelector(".popup");
  const popupElement = balloonTemplate.cloneNode(true);
  const popupFeaturesList = popupElement.querySelector(".popup__features");
  const popupPhotoList = popupElement.querySelector(".popup__photos");

  popupElement.querySelector(".popup__avatar").src = opt.author.avatar;
  popupElement.querySelector(".popup__text--address").textContent =
    opt.offer.adress;
  popupElement.querySelector(".popup__text--price").textContent =
    opt.offer.price;
  popupElement.querySelector(".popup__type").textContent = opt.offer.type;
  popupElement.querySelector(".popup__text--capacity").textContent =
    opt.offer.rooms + " комнаты для " + opt.offer.guests + " гостей";
  popupElement.querySelector(".popup__text--time").textContent =
    "Заезд после " + opt.offer.checkin + ", выезд до " + opt.offer.checkout;
  popupElement.querySelector(".popup__description").textContent =
    opt.offer.description;

  if (opt.offer.photos) {
    renderPhotosList(popupPhotoList, opt.offer.photos);
  } else {
    popupPhotoList.innerHTML = "";
  }
  if (opt.offer.features) {
    renderFearutesList(popupFeaturesList, opt.offer.features);
  } else {
    popupFeaturesList.innerHTML = "";
  }

  return popupElement;
};

export { createPopup };
