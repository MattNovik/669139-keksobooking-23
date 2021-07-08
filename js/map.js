import { unlockForm, formAddress } from "./form.js";
import { createData } from "./data.js";
import { renderFearutesList, renderPhotosList } from "./template.js";

const popupArray = createData();
const map = L.map("map-canvas")
  .setView(
    {
      lat: 35.4122,
      lng: 139.413,
    },
    10
  )
  .on("load", unlockForm());
const mainIcon = L.icon({
  iconUrl: "../img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [,],
});
const marker = L.marker(
  {
    lat: 35.4122,
    lng: 139.413,
  },
  {
    draggable: true,
    icon: mainIcon,
  }
);

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
    opt.offer.rooms + "комнаты для " + opt.offer.guests + " гостей";
  popupElement.querySelector(".popup__text--time").textContent =
    "Заезд после " + opt.offer.checkin + ", выезд до " + opt.offer.checkout;
  popupElement.querySelector(".popup__description").textContent =
    opt.offer.description;

  renderPhotosList(popupPhotoList, opt.offer.photos);
  renderFearutesList(popupFeaturesList, opt.offer.features);

  return popupElement;
};

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const addAdressToForm = (marker) => {
  const latLng = [];
  const markObj = marker.getLatLng();
  latLng.push(markObj.lat.toFixed(5));
  latLng.push(markObj.lng.toFixed(5));
  return latLng.join(",");
};

formAddress.value = addAdressToForm(marker);

marker.addTo(map).bindPopup(createPopup(popupArray[0]));

marker.on("moveend", (evt) => {
  const latLng = [];
  const markObj = evt.target.getLatLng();
  latLng.push(markObj.lat.toFixed(5));
  latLng.push(markObj.lng.toFixed(5));
  formAddress.value = latLng.join(",");
});

popupArray.forEach((opt) => {
  const icon = L.icon({
    iconUrl: "../img/pin.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerMin = L.marker(
    {
      lat: opt.location.lat,
      lng: opt.location.lng,
    },
    {
      icon: icon,
    }
  );

  markerMin.addTo(map).bindPopup(createPopup(opt), {
    keepInView: true,
  });
});
