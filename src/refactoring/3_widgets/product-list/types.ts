import { Product, Discount } from "../../6_shared/types";

export interface ProductCardProps {
  product: Product;
  remainingStock: number;
  addToCart: (product: Product) => void;
  maxDiscount: number;
}

export interface DiscountListProps {
  discounts: Discount[];
}

export interface AddToCartButtonProps {
  disabled: boolean;
  onClick: () => void;
  remainingStock: number;
}
