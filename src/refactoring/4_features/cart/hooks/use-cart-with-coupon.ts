import { useAtomValue } from "jotai";

import { cartTotalAtom } from "../../../5_entities/cart/model";
import { calculations } from "../../../5_entities/cart/lib";
import { selectedCouponAtom } from "../../../5_entities/coupon/model";

export const useCartWithCoupon = () => {
  const cartTotal = useAtomValue(cartTotalAtom);
  const selectedCoupon = useAtomValue(selectedCouponAtom);

  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } =
    calculations.calculateCouponAppliedTotal(cartTotal, selectedCoupon);

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};
