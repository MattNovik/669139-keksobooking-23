import { getData } from "./createData.js";

const data = new Array(10).fill("").map(getData, index);
