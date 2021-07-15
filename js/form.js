import { sendFormData } from "./api.js";
import { filterForm } from "./filter.js";

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const VALUE_ROOMS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const HOUSE_TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector(".ad-form");
const filtersForm = document.querySelector(".map__filters");
const formTitle = form.querySelector("#title");
const formPrice = form.querySelector("#price");
const formHouseType = form.querySelector("#type");
const formSend = form.querySelector(".ad-form__submit");
const formRooms = form.querySelector("#room_number");
const formGuest = form.querySelector("#capacity");
const formGuestOptions = formGuest.querySelectorAll("option");
const formFieldsets = form.querySelectorAll("fieldset");
const filterFormFieldsets = filtersForm.querySelectorAll("fieldset");
const formTimein = form.querySelector("#timein");
const formTimeout = form.querySelector("#timeout");
const formAddress = form.querySelector("#address");
const formReset = form.querySelector(".ad-form__reset");

const addAdressToForm = (lat, lng) => {
  const markLat = lat.toFixed(5);
  const markLong = lng.toFixed(5);
  formAddress.value = markLat + " ," + markLong;
};

const lockForm = function () {
  form.classList.add("ad-form--disabled");
  filtersForm.classList.add("ad-form--disabled");
  formFieldsets.forEach((field) => {
    field.setAttribute("disabled", "disabled");
  });
  filterFormFieldsets.forEach((field) => {
    field.setAttribute("disabled", "disabled");
  });
};

const unlockForm = function () {
  form.classList.remove("ad-form--disabled");
  formFieldsets.forEach((field) => {
    field.removeAttribute("disabled", "disabled");
  });
  filtersForm.classList.remove("ad-form--disabled");
  filterFormFieldsets.forEach((field) => {
    field.removeAttribute("disabled", "disabled");
  });
};

formRooms.addEventListener("input", (evt) => {
  const peopleAmount = evt.target.value;
  formGuestOptions.forEach((option) => {
    option.disabled = true;
  });
  VALUE_ROOMS[peopleAmount].forEach((seatsAmount) => {
    formGuestOptions.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
});

formTitle.addEventListener("input", () => {
  const valueLength = formTitle.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    formTitle.setCustomValidity(`Eщё ${MIN_NAME_LENGTH - valueLength} сим.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    formTitle.setCustomValidity(
      `Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`
    );
  } else {
    formTitle.setCustomValidity("");
  }

  formTitle.reportValidity();
});

formHouseType.addEventListener("input", (evt) => {
  const valueHouseType = evt.target.value;
  formPrice.setAttribute("min", HOUSE_TYPE_PRICE[valueHouseType]);
  formPrice.setAttribute("placeholder", HOUSE_TYPE_PRICE[valueHouseType]);
});

formTimein.addEventListener("input", (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

formTimeout.addEventListener("input", (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

formReset.addEventListener("click", () => {
  filterForm.reset();
});

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    sendFormData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target)
    );
  });
};

export { unlockForm, lockForm, addAdressToForm, setUserFormSubmit, form };
