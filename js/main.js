import { renderPopups, createMap } from './map.js';
import { setUserFormSubmit , lockForm} from './form.js';
import { createSuccessSubmit,renderErrorMessage, createErrorMessageGet } from './messages.js';
import { getData } from './api.js';
import { setFilterChange } from './filter.js';

getData((data) => {
  lockForm();
  createMap();
  renderPopups(data.slice(0,10));
  setFilterChange(data);
}, createErrorMessageGet);

setUserFormSubmit(createSuccessSubmit, renderErrorMessage);

