import { sendFormData } from './api.js';
import { filterForm } from './filter.js';
import { setMarkerLatLng } from './map.js';
import { clearImgSrc } from './photo.js';

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const valueRooms = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const houseTypePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const formTitle = form.querySelector('#title');
const formPrice = form.querySelector('#price');
const formHouseType = form.querySelector('#type');
const formRooms = form.querySelector('#room_number');
const formGuest = form.querySelector('#capacity');
const formGuestOptions = formGuest.querySelectorAll('option');
const formFieldsets = form.querySelectorAll('fieldset');
const filterFormFieldsets = filterForm.querySelectorAll('fieldset');
const formTimein = form.querySelector('#timein');
const formTimeout = form.querySelector('#timeout');
const formAddress = form.querySelector('#address');
const formReset = form.querySelector('.ad-form__reset');

const addAdressToForm = (lat, lng) => {
  const markLat = lat.toFixed(5);
  const markLong = lng.toFixed(5);
  formAddress.value = `${markLat}, ${markLong}`;
};

const lockForm = () => {
  form.classList.add('ad-form--disabled');
  filterForm.classList.add('ad-form--disabled');
  formFieldsets.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
  filterFormFieldsets.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

const unlockForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((field) => {
    field.removeAttribute('disabled', 'disabled');
  });
  filterForm.classList.remove('ad-form--disabled');
  filterFormFieldsets.forEach((field) => {
    field.removeAttribute('disabled', 'disabled');
  });
};

const disableFormGuestStart = () => {
  formGuestOptions.forEach((option) => {
    if (Number(option.value) !== 1) {
      option.disabled = true;
    } else {
      option.selected = true;
    }
  });
};

formRooms.addEventListener('input', (evt) => {
  const peopleAmount = evt.target.value;
  formGuestOptions.forEach((option) => {
    option.disabled = true;
  });
  valueRooms[peopleAmount].forEach((seatsAmount) => {
    formGuestOptions.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
});

formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    formTitle.setCustomValidity(`E???? ${MIN_NAME_LENGTH - valueLength} ??????.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    formTitle.setCustomValidity(
      `?????????????? ???????????? ${valueLength - MAX_NAME_LENGTH} ????????.`,
    );
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
});

formHouseType.addEventListener('input', (evt) => {
  const valueHouseType = evt.target.value;
  formPrice.setAttribute('min', houseTypePrice[valueHouseType]);
  formPrice.setAttribute('placeholder', houseTypePrice[valueHouseType]);
});

formTimein.addEventListener('input', (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

formTimeout.addEventListener('input', (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  filterForm.reset();
  form.reset();
  addAdressToForm(35.6982,139.7613);
  setMarkerLatLng();
  clearImgSrc();
});

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendFormData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

export {
  unlockForm,
  lockForm,
  addAdressToForm,
  setUserFormSubmit,
  form,
  disableFormGuestStart
};
