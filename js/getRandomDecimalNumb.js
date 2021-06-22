const getRangeDecimal = (min, max, decimalNumber) => {
  if (min < 0 || min >= max || decimalNumber < 0) {
    throw new Error("something wrong, check numbers");
  }
  return (min + Math.random() * (max + 1 - min)).toFixed(decimalNumber);
};

export {getRangeDecimal}
