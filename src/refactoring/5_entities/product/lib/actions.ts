import { Product, Discount } from "../../../6_shared/types/domain";

export const updateProduct = (
  products: Product[],
  updatedProduct: Product
): Product[] => {
  return products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
};

export const addProduct = (
  products: Product[],
  newProduct: Product
): Product[] => {
  return [...products, newProduct];
};

export const addDiscount = (product: Product, discount: Discount): Product => {
  return {
    ...product,
    discounts: [...product.discounts, discount],
  };
};

export const removeDiscount = (
  product: Product,
  discountIndex: number
): Product => {
  return {
    ...product,
    discounts: product.discounts.filter((_, index) => index !== discountIndex),
  };
};

export const findProduct = (products: Product[], productId: string) => {
  return products.find((product) => product.id === productId);
};
