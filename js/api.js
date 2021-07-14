import { form } from "./form.js";

const getData = (onSuccess, onFail) => {
  fetch("https://23.javascript.pages.academy/keksobooking/data")
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const sendFormData = (onSuccess, onFail) => {
  // хочу отопвливать Enter на форме для отправки, но таким образом (ниже) форма не валидируется и отправляется сама
  /*form.addEventListener("keydown", (evt) => {
    if (isEnterEvent(evt)) {
      evt.preventDefault();
      const formData = new FormData(form);

      fetch(
        'https://23.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      )
      .then(() => onSuccess())
      .catch((err) => {
        console.log(err);
      });
    }
  });*/
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch("https://23.javascript.pages.academy/keksobooking", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
  });
};

export { getData, sendFormData };
