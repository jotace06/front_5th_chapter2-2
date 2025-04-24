import { useState } from "react";
import { Discount } from "../../../6_shared/types";

export const useDiscountEditor = () => {
  const [newDiscount, setNewDiscount] = useState<Discount>({
    quantity: 0,
    rate: 0,
  });

  const handleDiscountQuantityChange = (value: number) => {
    setNewDiscount((prev) => ({
      ...prev,
      quantity: value,
    }));
  };

  const handleDiscountRateChange = (value: number) => {
    setNewDiscount((prev) => ({
      ...prev,
      rate: value / 100,
    }));
  };

  const resetDiscount = () => {
    setNewDiscount({ quantity: 0, rate: 0 });
  };

  return {
    newDiscount,
    handleDiscountQuantityChange,
    handleDiscountRateChange,
    resetDiscount,
  };
};
