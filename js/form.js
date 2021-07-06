const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const form = document.querySelector(".ad-form");
const filtersForm = document.querySelector(".map__filters");
const formTitle = form.querySelector("#title");
const formPrice = form.querySelector("#price");
const formHouseType = form.querySelector("#type");
const formSend = form.querySelector(".ad-form__submit");
const formRooms = form.querySelector("#room_number");
const formGuest = form.querySelector("#capacity");
const formFieldsets = form.querySelectorAll("fieldset");
const filterFormFieldsets = filtersForm.querySelectorAll("fieldset");
const formTimein = form.querySelector("#timein");
const formTimeout = form.querySelector("#timeout");

form.method = "POST";
form.action = "https://23.javascript.pages.academy/keksobooking";
form.enctype = "multipart/form-data";

const windowLoading = function () {
  form.classList.add("ad-form--disabled");
  filtersForm.classList.add("ad-form--disabled");
  formFieldsets.forEach((field) => {
    field.setAttribute("disabled", "disabled");
  });
  filterFormFieldsets.forEach((field) => {
    field.setAttribute("disabled", "disabled");
  });
};

const windowReady = function () {
  form.classList.remove("ad-form--disabled");
  formFieldsets.forEach((field) => {
    field.removeAttribute("disabled", "disabled");
  });
  filtersForm.classList.remove("ad-form--disabled");
  filterFormFieldsets.forEach((field) => {
    field.removeAttribute("disabled", "disabled");
  });
};

windowLoading();
/*window.onload = windowReady();*/

formRooms.addEventListener("input", () => {
  const valueRooms = formRooms.value;
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

  formGuest.reportValidity();
});

formGuest.addEventListener("input", () => {
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

formHouseType.addEventListener("input", () => {
  const valueHouseType = formHouseType.value;

  if (valueHouseType == "bungalow") {
    formPrice.setAttribute("min", "0");
    formPrice.setAttribute("placeholder", "0");
  } else if (valueHouseType == "flat") {
    formPrice.setAttribute("min", "1000");
    formPrice.setAttribute("placeholder", "1000");
  } else if (valueHouseType == "hotel") {
    formPrice.setAttribute("min", "3000");
    formPrice.setAttribute("placeholder", "3000");
  } else if (valueHouseType == "house") {
    formPrice.setAttribute("min", "5000");
    formPrice.setAttribute("placeholder", "5000");
  } else if (valueHouseType == "palace") {
    formPrice.setAttribute("min", "10000");
    formPrice.setAttribute("placeholder", "10000");
  }
});

formPrice.addEventListener("input", () => {
  const valuePrice = formPrice.value;
  const valueAttrPriceMin = formPrice.getAttribute("min");

  if (valuePrice < formPrice.min) {
    formPrice.setCustomValidity(
      `Price need to be more than ${valueAttrPriceMin}`
    );
  } else {
    formPrice.setCustomValidity("");
  }

  formPrice.reportValidity();
});

formTimein.addEventListener("input", () => {
  const valueTimein = formTimein.value;
  const valueTimeout = formTimeout.value;

  for (let i = 0; i < formTimeout.options.length; i++) {
    if (formTimeout.options[i].value == valueTimein) {
      formTimeout.options[i].selected = true;
    }
  }
});

formTimeout.addEventListener("input", () => {
  const valueTimein = formTimein.value;
  const valueTimeout = formTimeout.value;
  for (let i = 0; i < formTimein.options.length; i++) {
    if (formTimein.options[i].value == valueTimeout) {
      formTimein.options[i].selected = true;
    }
  }
});

/*formSend.addEventListener("submit", function (evt) {

});*/
