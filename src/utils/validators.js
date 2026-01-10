function isAdult(age) {
  return Number.isFinite(age) && age >= 18;
}

function getDiscount(price, isVip) {
  if (!Number.isFinite(price) || price < 0) {
    return 0;
  }

  const MIN_PRICE_FOR_VIP_DISCOUNT = 100;
  const VIP_DISCOUNT_RATE = 0.1;

  if (isVip && price >= MIN_PRICE_FOR_VIP_DISCOUNT) {
    return price * VIP_DISCOUNT_RATE;
  }

  return 0;
}

module.exports = {
  isAdult,
  getDiscount,
};
