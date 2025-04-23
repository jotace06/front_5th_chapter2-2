// _widgets/product-list/components/product-list.tsx
import { useCart } from "../../../4_features/cart/hooks";
import {
  useProducts,
  useProductsWithCart,
} from "../../../4_features/product/hooks";
import { ProductCard } from "./product-card";

export const ProductList = () => {
  const { products, getMaxDiscount } = useProducts();
  const { getRemainingStock } = useProductsWithCart();
  const { addToCart } = useCart();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            remainingStock={getRemainingStock(product)}
            addToCart={addToCart}
            maxDiscount={getMaxDiscount(product.discounts)}
          />
        ))}
      </div>
    </>
  );
};
