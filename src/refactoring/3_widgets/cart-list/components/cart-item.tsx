import { CartItemProps } from "../types";
import { QuantityControl } from "./quantity-control";

export const CartItem = ({
  item,
  updateQuantity,
  removeFromCart,
  appliedDiscount,
}: CartItemProps) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      <div>
        <span className="font-semibold">{item.product.name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {item.product.price.toLocaleString()}원 x {item.quantity}
          {appliedDiscount > 0 && (
            <span className="text-green-600 ml-1">
              ({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
            </span>
          )}
        </span>
      </div>
      <QuantityControl
        productId={item.product.id}
        quantity={item.quantity}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
