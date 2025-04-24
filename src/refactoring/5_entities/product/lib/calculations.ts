import { CartItem, Product } from "../../../6_shared/types/domain";

export const getMaxDiscount = (discounts: Product["discounts"]) => {
  return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};

export const getRemainingStock = (
  product: Product,
  cartItem: CartItem | undefined
): number => {
  return product.stock - (cartItem?.quantity || 0);
};
