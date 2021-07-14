import { unlockForm, formAddress, addAdressToForm } from "./form.js";
import { getData } from "./api.js";
import { createPopup } from "./popup.js";

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

export { renderPopups };
