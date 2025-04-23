import { useAtomValue } from "jotai";

import { findCartItemAtom } from "../../../5_entities/cart/model/atoms";
import { Product } from "../../../6_shared/types/domain";

export const useProductsWithCart = () => {
  const findCartItem = useAtomValue(findCartItemAtom);

  const getRemainingStock = (product: Product) => {
    const cartItem = findCartItem(product.id);

    return product.stock - (cartItem?.quantity || 0);
  };

  return { getRemainingStock };
};
