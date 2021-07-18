const renderPhotosList = (placeInsert, data) => {
  const cloneImg = placeInsert.children[0].cloneNode(true); // clone element before deleted
  placeInsert.innerHTML = '';
  data.forEach((real) => {
    const listElement = cloneImg.cloneNode(true);
    listElement.src = real;
    placeInsert.appendChild(listElement);
  });
};

const renderFearutesList = (placeInsert, data) => {
  placeInsert.innerHTML = '';
  data.forEach((real) => {
    const listElement = document.createElement('li');
    listElement.classList.add('popup__feature');
    listElement.classList.add(`popup__feature--${real}`);
    listElement.textContent = real;
    placeInsert.appendChild(listElement);
  });
};

const createSuccessMessage = function (placeInsert) {
  const successMessageTemplate = document.querySelector('#success').content;
  const similarMessage = successMessageTemplate.cloneNode(true);
  placeInsert.appendChild(similarMessage);
};

const createErrorMessage = function (placeInsert) {
  const errorMessageTemplate = document.querySelector('#error').content;
  const similarMessage = errorMessageTemplate.cloneNode(true);
  placeInsert.appendChild(similarMessage);
};

export {
  renderFearutesList,
  renderPhotosList,
  createSuccessMessage,
  createErrorMessage
};
