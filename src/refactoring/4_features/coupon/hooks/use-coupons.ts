import { useAtom } from "jotai";

import { couponsAtom } from "../../../5_entities/coupon/model/atoms";
import { Coupon } from "../../../6_shared/types";

export const useCoupons = () => {
  const [coupons, setCoupons] = useAtom(couponsAtom);

  const addCoupon = (coupon: Coupon) => {
    setCoupons([...coupons, coupon]);
  };

  return {
    coupons,
    addCoupon,
  };
};
