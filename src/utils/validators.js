function isAdult(age) {
  if (typeof age !== 'number' || Number.isNaN(age)) {
    return false;
  }
  return age >= 18;
}

function getDiscount(price, isVip) {
  if (typeof price !== 'number' || Number.isNaN(price) || price < 0) {
    return 0;
  }

  if (isVip && price >= 100) {
    return price * 0.1;
  }

  return 0;
}

module.exports = {
  isAdult,
  getDiscount,
};
