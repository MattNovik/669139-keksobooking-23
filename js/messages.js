import { createSuccessMessage, createErrorMessage } from './template.js';
import { isEscEvent } from './utils.js';
import { form } from './form.js';
import { filterForm } from './filter.js';

const closeMessage = () => {
  const successMessage = document.querySelector('.success');
  const errorMessage = document.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  } else if (successMessage) {
    successMessage.remove();
  }
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const createSuccessSubmit = function () {
  createSuccessMessage(document.body);
  const successMessage = document.querySelector('.success');
  successMessage.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
  form.reset();
  filterForm.reset();
};

const renderErrorMessage = function () {
  createErrorMessage(document.body);
  const errorMessage = document.querySelector('.error');
  errorMessage.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
  form.reset();
  filterForm.reset();
};

const createErrorMessageGet = function () {
  const message = document.createElement('div');
  message.style.zIndex = 100;
  message.style.position = 'absolute';
  message.style.left = 0;
  message.style.top = 0;
  message.style.right = 0;
  message.style.padding = '10px 3px';
  message.style.fontSize = '30px';
  message.style.textAlign = 'center';
  message.style.backgroundColor = 'red';

  message.textContent = 'Didnt get information from server';

  document.body.append(message);
};
export { createSuccessSubmit, renderErrorMessage, createErrorMessageGet };
