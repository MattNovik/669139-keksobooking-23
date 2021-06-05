const getRange = (min, max) => {
  if (min < 0 || min > max) {
   throw new Error('something wrong, check numbers');
  }
  return (min + Math.random() * (max + 1 - min)).toFixed(2);
};
