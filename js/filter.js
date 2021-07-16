import { markerGroup, renderPopups } from './map.js';
import { debounce } from './utils.js';

const houseType = document.querySelector('#housing-type');
const priceType = document.querySelector('#housing-price');
const roomsType = document.querySelector('#housing-rooms');
const guestsType = document.querySelector('#housing-guests');
const filterForm = document.querySelector('.map__filters');

const filterPrice = (advt) =>
  priceType.value === 'any' || (priceType.value === 'middle' && (advt.offer.price >= 10000 || advt.offer.price <= 50000)) || (priceType.value === 'low' && advt.offer.price < 10000) || (priceType.value === 'high' && advt.offer.price > 50000);

const filterRoom = (advt) =>
  roomsType.value === 'any' || Number(roomsType.value) === advt.offer.rooms;

const filterGuest = (advt) =>
  guestsType.value === 'any' || Number(guestsType.value) === advt.offer.guests;

const filterHouse = (advt) =>
  houseType.value === 'any' || advt.offer.type === houseType.value;

const filterFeatures = (advt) => {
  const featuresList = filterForm.querySelectorAll('.map__checkbox:checked');
  let countList = 0;

  featuresList.forEach((opt) => {
    if (advt.offer.features && advt.offer.features.includes(opt.value)) {
      countList++;
    }
  });

  return countList === featuresList.length;
};

const setFilter = (data) => {
  const filtdData = data.filter((advt) =>filterHouse(advt) && filterPrice(advt) && filterRoom(advt) && filterGuest(advt) && filterFeatures(advt));
  return filtdData;
};

const filterChange = (data) =>
  debounce(() => {
    const filteredData = setFilter(data);
    markerGroup.clearLayers();
    renderPopups(filteredData.slice(0,10));
  }, 500);

const setFilterChange = (data) => {
  filterForm.addEventListener('change', filterChange(data));
};

export { setFilterChange, filterForm };
