import { renderCard, renderDataCards } from "./template.js";
import "./form.js";
import "./map.js";
import { sendFormData } from "./api.js";
import { createSuccessSubmit,renderErrorMessage } from "./messages.js";

sendFormData(createSuccessSubmit, renderErrorMessage);
