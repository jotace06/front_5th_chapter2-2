import { Coupon } from "../../6_shared/types";

export interface CouponSelectProps {
  coupons: Coupon[];
  selectedCoupon: Coupon | null;
  applyCoupon: (coupon: Coupon) => void;
}
