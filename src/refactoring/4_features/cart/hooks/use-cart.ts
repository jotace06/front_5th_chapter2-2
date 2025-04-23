import { useAtom, useAtomValue } from "jotai";

import { cartAtom, cartTotalAtom } from "../../../5_entities/cart/model";
import { actions, calculations } from "../../../5_entities/cart/lib";
import { Product } from "../../../6_shared/types";

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const cartTotal = useAtomValue(cartTotalAtom);

  const addToCart = (product: Product) => {
    // 재고가 없으면 카트에 추가하지 않음
    if (product.stock <= 0) return;

    // 기존 상품 조회
    const existingItem = calculations.findCartItem(cart, product.id);

    if (existingItem) {
      // 기존 상품이면 수량 증가
      const updatedCart = actions.updateCartItemQuantity(
        cart,
        product.id,
        existingItem.quantity + 1
      );
      setCart(updatedCart);
    } else {
      // 새 상품 추가
      const updatedCart = actions.addToCart(cart, product);
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = actions.removeFromCart(cart, productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    const existingItem = calculations.findCartItem(cart, productId);

    // 존재하지 않는 상품이면 원래 상태 반환
    if (!existingItem) return;

    // 수량이 0 이하면 상품 제거
    if (newQuantity <= 0) {
      const updatedCart = actions.removeFromCart(cart, productId);
      setCart(updatedCart);
    }

    // 재고 초과면 재고만큼 줄임
    const updatedCart = actions.updateCartItemQuantity(
      cart,
      productId,
      Math.min(newQuantity, existingItem.product.stock)
    );
    setCart(updatedCart);
  };

  return {
    cart,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    getAppliedDiscount: calculations.calculateMaxApplicableDiscount,
  };
};
