import { CartItem } from "../../../6_shared/types/domain";

export const addToCart = (
  cart: CartItem[],
  product: CartItem["product"]
): CartItem[] => {
  return [...cart, { product, quantity: 1 }];
};

export const removeFromCart = (
  cart: CartItem[],
  productId: CartItem["product"]["id"]
): CartItem[] => {
  return cart.filter((cartItem) => cartItem.product.id !== productId);
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: CartItem["product"]["id"],
  newQuantity: CartItem["quantity"]
): CartItem[] => {
  return cart.map((cartItem) => {
    if (cartItem.product.id === productId) {
      return {
        ...cartItem,
        quantity: newQuantity,
      };
    }

    return cartItem;
  });
};

export const findCartItem = (
  cart: CartItem[],
  productId: CartItem["product"]["id"]
) => {
  return cart.find((cartItem) => cartItem.product.id === productId);
};
