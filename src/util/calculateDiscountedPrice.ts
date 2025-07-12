export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  return Math.round(finalPrice * 100) / 100;
};
