import { unlockForm, addAdressToForm } from './form.js';
import { createPopup } from './popup.js';

const map = L.map('map-canvas');

const movePin = (evt) => {
  const markLat = evt.target.getLatLng().lat;
  const markLong = evt.target.getLatLng().lng;
  addAdressToForm(markLat, markLong );
};

const uploadedMap = () => {
  addAdressToForm(35.698, 139.7613);
  unlockForm();
};

const createMarker = () => {
  const mainIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26,26],
  });

  const markerPoint = L.marker(
    {
      lat: 35.6982,
      lng: 139.7613,
    },
    {
      draggable: true,
      icon: mainIcon,
    },
  );

  return markerPoint;
};

const marker = createMarker();

const createMap = () => {
  map.on('load', uploadedMap)
    .setView(
      {
        lat: 35.6982,
        lng: 139.7613,
      },
      10,
    );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};

marker.addTo(map);
marker.on('moveend', movePin);

const markerGroup = L.layerGroup().addTo(map);
const renderPopups = (advt) => {
  advt.forEach((opt) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
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
      },
    );

    markerMin.addTo(markerGroup).bindPopup(createPopup(opt), {
      keepInView: true,
    });
  });
};

const setMarkerLatLng = () => {
  marker.setLatLng(L.latLng(35.6982,139.7613));
};

export { renderPopups, markerGroup, createMap, setMarkerLatLng };
