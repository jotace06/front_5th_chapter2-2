import { atom } from "jotai";

import { Coupon } from "../../../6_shared/types/domain";
import { initialCoupons } from "./constants";

export const couponsAtom = atom<Coupon[]>(initialCoupons);

export const selectedCouponAtom = atom<Coupon | null>(null);
