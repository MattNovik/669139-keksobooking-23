import { renderPopups } from "./map.js";
import { setUserFormSubmit } from "./form.js";
import { createSuccessSubmit,renderErrorMessage, createErrorMessageGet } from "./messages.js";
import { getData } from "./api.js";

getData((data) => {
  renderPopups(data.slice(0,10));
/*  houseType.addEventListener("input", () => {
    markerGroup.clearLayers();
    const objNew = newArray.filter(isHouse);
    renderPopups(objNew.slice(0,10));
  });*/
}, createErrorMessageGet);

setUserFormSubmit(createSuccessSubmit, renderErrorMessage);

