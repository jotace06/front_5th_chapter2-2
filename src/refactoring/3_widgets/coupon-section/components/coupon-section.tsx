import { useCoupon, useCoupons } from "../../../4_features/coupon/hooks";
import { CouponSelect } from "./coupon-select";

export const CouponSection = () => {
  const { coupons } = useCoupons();
  const { selectedCoupon, applyCoupon } = useCoupon();

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <CouponSelect
        coupons={coupons}
        selectedCoupon={selectedCoupon}
        applyCoupon={applyCoupon}
      />
    </div>
  );
};
