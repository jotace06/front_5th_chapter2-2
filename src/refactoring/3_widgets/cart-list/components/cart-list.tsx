import { useCart } from "../../../4_features/cart/hooks";
import { CartItem } from "./cart-item";

export const CartList = () => {
  const { cart, updateQuantity, removeFromCart, getAppliedDiscount } =
    useCart();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      <div className="space-y-2">
        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            appliedDiscount={getAppliedDiscount(item)}
          />
        ))}
      </div>
    </>
  );
};
