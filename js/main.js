import { renderPopups, createMap } from './map.js';
import { setUserFormSubmit , lockForm, disableFormGuestStart } from './form.js';
import { createSuccessSubmit,renderErrorMessage, createErrorMessageGet } from './messages.js';
import { getData } from './api.js';
import { setFilterChange } from './filter.js';
import './photo.js';

getData((data) => {
  lockForm();
  createMap();
  renderPopups(data.slice(0,10));
  setFilterChange(data);
  disableFormGuestStart();
}, createErrorMessageGet);

setUserFormSubmit(createSuccessSubmit, renderErrorMessage);

