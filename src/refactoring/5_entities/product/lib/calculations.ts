import { Product } from "../../../6_shared/types/domain";

export const getMaxDiscount = (discounts: Product["discounts"]) => {
  return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};
