import { createSuccessMessage, createErrorMessage } from "./template.js";
import { form } from "./form.js";

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const closeMessage = () => {
  const successMessage = document.querySelector(".success");
  const errorMessage = document.querySelector(".error");
  if (errorMessage) {
    errorMessage.remove();
  } else if (successMessage) {
    successMessage.remove();
  }
  document.removeEventListener("keydown", onPopupEscKeydown);
};

const createSuccessSubmit = function () {
  createSuccessMessage(document.body);
  const successMessage = document.querySelector(".success");
  successMessage.addEventListener("click", closeMessage);
  document.addEventListener("keydown", onPopupEscKeydown);
  form.reset();
};

const renderErrorMessage = function () {
  createErrorMessage(document.body);
  const errorMessage = document.querySelector(".error");
  errorMessage.addEventListener("click", closeMessage);
  document.addEventListener("keydown", onPopupEscKeydown);
  form.reset();
};

export { createSuccessSubmit, renderErrorMessage };
