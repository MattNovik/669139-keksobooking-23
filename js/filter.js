
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
