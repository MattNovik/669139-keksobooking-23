import { getData } from "./data.js";

const createData = () =>
  new Array(10).fill(null).map((item, index) => getData(item, index));

export { createData };
