import { unlockForm, formAddress, addAdressToForm } from "./form.js";
import { getData } from "./api.js";
import { createPopup } from "./popup.js";
import { createErrorMessageGet } from "./template.js";

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
  iconUrl: "img/main-pin.svg",
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

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

marker.addTo(map);

formAddress.value = addAdressToForm(marker);

marker.on("moveend", (evt) => {
  const latLng = [];
  const markObj = evt.target.getLatLng();
  latLng.push(markObj.lat.toFixed(5));
  latLng.push(markObj.lng.toFixed(5));
  formAddress.value = latLng.join(",");
});

const markerGroup = L.layerGroup().addTo(map);
const renderPopups = function(advt) {
  advt.forEach((opt) => {
    const icon = L.icon({
      iconUrl: "img/pin.svg",
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

    markerMin.addTo(markerGroup).bindPopup(createPopup(opt), {
      keepInView: true,
    });
  });
};

const houseType = document.querySelector("#housing-type");
const priceType = document.querySelector("#housing-price");
const roomsType = document.querySelector("#housing-rooms");
const guestsType = document.querySelector("#housing-guests");

function isPrice(value) {
  if (priceType.value == 'any') {
    return true;
  } else if (priceType.value == 'middle' && (value.offer.price >= 10000 || value.offer.price <= 50000)) {
    return true;
  } else  if (priceType.value == 'low' && value.offer.price < 10000) {
    return true;
  } else  if (priceType.value == 'high' && value.offer.price > 50000) {
    return true;
  } else {
    return false;
  }
};

function isRoom(value) {
  if (roomsType.value == 'any') {
    return true;
  } else if (roomsType.value == value.offer.rooms) {
    return true;
  } else {
    return false;
  }
};

function isGuest(value) {
  if (guestsType.value == 'any') {
    return true;
  } else if (guestType.value == value.offer.guests) {
    return true;
  } else {
    return false;
  }
};

function isHouse(value) {
  if (houseType.value == 'any') {
    return true;
  } else if (value.offer.type == houseType.value) {
    return true;
  } else {
    return false;
  }
};
/*const filtArray = function(data) {

};*/

getData((data) => {
  const newArray = data;
  renderPopups(newArray.slice(0,10));
  houseType.addEventListener("input", () => {
    markerGroup.clearLayers();
    const objNew = newArray.filter(isHouse);
    renderPopups(objNew.slice(0,10));
  });
}, createErrorMessageGet);
