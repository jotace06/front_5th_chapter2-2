import { CartItem } from "../../6_shared/types";

export interface CartItemProps {
  item: CartItem;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  appliedDiscount: number;
}

export interface QuantityControlProps {
  productId: string;
  quantity: number;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}
