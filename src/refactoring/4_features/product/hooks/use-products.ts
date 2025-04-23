import { useAtom } from "jotai";

import { productsAtom } from "../../../5_entities/product/model/atoms";
import { getMaxDiscount } from "../../../5_entities/product/lib";

export const useProducts = () => {
  const [products, setProducts] = useAtom(productsAtom);

  return {
    products,
    setProducts,
    getMaxDiscount,
  };
};
