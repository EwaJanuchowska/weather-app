export const fahrenheitToCelsius = degrees => {
  return Number((degrees - 32) / 1.8).toFixed(1);
};

export const mphToKph = mph => {
  return Number(mph * 1.609344).toFixed(2);
};
