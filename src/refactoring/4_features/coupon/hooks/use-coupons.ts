import { useAtom, useAtomValue } from "jotai";

import {
  selectedCouponAtom,
  couponsAtom,
} from "../../../5_entities/coupon/model/atoms";

export const useCoupons = () => {
  const [selectedCoupon, setSelectedCoupon] = useAtom(selectedCouponAtom);

  const coupons = useAtomValue(couponsAtom);

  return {
    coupons,
    selectedCoupon,
    applyCoupon: setSelectedCoupon,
  };
};
