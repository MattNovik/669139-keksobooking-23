import { createData } from "./data.js";
import { renderCard, renderDataCards } from "./template.js";

const cardTemplate = document.querySelector("#card").content;
const similarPopup = cardTemplate.cloneNode(true);
const map = document.querySelector("#map-canvas");
const popupArray = createData();

renderDataCards(popupArray, map, similarPopup);
