import { createSuccessMessage } from "./template.js";
import { form } from "./form.js";

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const closeMessage = () => {
  const successMessage = document.querySelector(".success")
  successMessage.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const createSuccessSubmit = function () {
  createSuccessMessage(document.body);
  const successMessage = document.querySelector(".success");
  successMessage.addEventListener("click", closeMessage)
  document.addEventListener('keydown', onPopupEscKeydown);
  form.reset();
};

export { createSuccessSubmit };
