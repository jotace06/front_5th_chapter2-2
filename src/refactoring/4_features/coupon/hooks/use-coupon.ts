import { useAtom } from "jotai";

import { selectedCouponAtom } from "../../../5_entities/coupon/model/atoms";

export const useCoupon = () => {
  const [selectedCoupon, setSelectedCoupon] = useAtom(selectedCouponAtom);

  return {
    selectedCoupon,
    applyCoupon: setSelectedCoupon,
  };
};
