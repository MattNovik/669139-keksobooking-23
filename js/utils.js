const getRange = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error("something wrong, check numbers");
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRangeDecimal = (min, max, decimalNumber) => {
  if (min < 0 || min >= max || decimalNumber < 0) {
    throw new Error("something wrong, check numbers");
  }
  return (min + Math.random() * (max + 1 - min)).toFixed(decimalNumber);
};

const getRandomArrayLength = (elements) =>
  elements.slice(0, getRange(0, elements.length));

const getRandomArrayElement = (elements) =>
  elements[getRange(0, elements.length - 1)];

const renderPhotosList = (placeInsert,dataArray,infArray) => { // infArray : ['elem','class','text or alt','width','height']
  let realData = dataArray;
  for (let real of realData) {
    let listElement = document.createElement(infArray[0]);
    listElement.classList.add(infArray[1]);
    listElement.alt = infArray[2];
    listElement.src = real;
    listElement.width = infArray[3];
    listElement.height = infArray[4];
    placeInsert.appendChild(listElement);
  }
};

const renderFearutesList = (placeInsert,dataArray,infArray) => { // infArray : ['elem','class']
  let realData = dataArray;
  for (let real of realData) {
    let listElement = document.createElement(infArray[0]);
    listElement.classList.add(infArray[1]);
    listElement.classList.add(infArray[1] + "--" + real);
    listElement.textContent = real;
    placeInsert.appendChild(listElement);
  }
};

export {
  getRange,
  getRangeDecimal,
  getRandomArrayLength,
  getRandomArrayElement,
  renderPhotosList,
  renderFearutesList
};
