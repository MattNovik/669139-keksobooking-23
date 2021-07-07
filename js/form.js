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

lockForm();

window.addEventListener("load",unlockForm());

formRooms.addEventListener("input", (evt) => {
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

/*const valueRooms = formRooms.value;
  const valueGuest = formGuest.value;

  if (valueRooms == 1 && valueGuest != 1) {
    formGuest.setCustomValidity("only for 1 guest");
  } else if (valueRooms == 2 && valueGuest != 2 && valueGuest != 1) {
    formGuest.setCustomValidity("only for 1 or 2 guests");
  } else if (valueRooms == 3 && valueGuest == 0) {
    formGuest.setCustomValidity("only for 1, 2 or 3 guests");
  } else if (valueRooms == 100 && valueGuest != 0) {
    formGuest.setCustomValidity("not for guests");
  } else {
    formGuest.setCustomValidity("");
  }

  formGuest.reportValidity();*/

/*formGuest.addEventListener("input", () => {
  const valueRooms = formRooms.value;
  const valueGuest = formGuest.value;

  if (
    valueGuest == 1 &&
    valueRooms != 1 &&
    valueRooms != 2 &&
    valueRooms != 3
  ) {
    formGuest.setCustomValidity("not for guests");
  } else if (valueGuest == 2 && valueRooms == 1) {
    formGuest.setCustomValidity("only for 1 guest");
  } else if (valueGuest == 2 && valueRooms == 100) {
    formGuest.setCustomValidity("not for guest");
  } else if (valueGuest == 3 && (valueRooms == 100 || valueRooms != 3)) {
    formGuest.setCustomValidity("only for 1, 2 or 3 guests");
  } else if (valueGuest == 0 && valueRooms != 100) {
    formGuest.setCustomValidity("need more rooms");
  } else {
    formGuest.setCustomValidity("");
  }

  formGuest.reportValidity();
});*/

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
  formPrice.setAttribute("min", houseTypePrice[valueHouseType]);
  formPrice.setAttribute("placeholder", houseTypePrice[valueHouseType]);
});

/*formPrice.addEventListener("input", () => {
  const valuePrice = formPrice.value;
  const valueAttrPriceMin = formPrice.getAttribute("min");

  if (valuePrice < formPrice.min) {
    formPrice.setCustomValidity(
      `Price need to be more than ${valueAttrPriceMin}`
    );
  } else {
    formPrice.setCustomValidity("");
  }

  formPrice.reportValidity(); //проверяет цену при вводе, а не только при отправке
});*/

formTimein.addEventListener("input", (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

formTimeout.addEventListener("input", (evt) => {
  formTimein.value = evt.target.value;
  formTimeout.value = evt.target.value;
});

/*formSend.addEventListener("submit", function (evt) {

});*/
