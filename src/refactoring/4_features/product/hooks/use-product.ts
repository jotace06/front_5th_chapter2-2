import { useAtomValue } from "jotai";

import {
  getMaxDiscount,
  getRemainingStock,
} from "../../../5_entities/product/lib";
import { findCartItemAtom } from "../../../5_entities/cart/model/atoms";
import { Product } from "../../../6_shared/types/domain";

export const useProduct = (product: Product) => {
  const findCartItem = useAtomValue(findCartItemAtom);

  const cartItem = findCartItem(product.id);
  const remainingStock = getRemainingStock(product, cartItem);
  const maxDiscount = getMaxDiscount(product.discounts);

  return {
    remainingStock,
    maxDiscount,
  };
};
