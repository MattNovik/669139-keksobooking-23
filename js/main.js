import { createData } from "./data.js";
import { renderCard, renderDataCards } from "./template.js";
import "./form.js";

const map = document.querySelector("#map-canvas");
const popupArray = createData();

renderDataCards(popupArray, map);
