import { createData } from "./data.js";
import { renderCard, renderDataCards } from "./template.js";

const map = document.querySelector("#map-canvas");
const popupArray = createData();

renderDataCards(popupArray, map);
