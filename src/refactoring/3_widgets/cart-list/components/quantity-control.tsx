import { QuantityControlProps } from "../types";

export const QuantityControl = ({
  productId,
  quantity,
  updateQuantity,
  removeFromCart,
}: QuantityControlProps) => {
  const handleDecreaseClick = () => updateQuantity(productId, quantity - 1);
  const handleIncreaseClick = () => updateQuantity(productId, quantity + 1);
  const handleRemoveClick = () => removeFromCart(productId);

  return (
    <div>
      <button
        onClick={handleDecreaseClick}
        className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
      >
        -
      </button>
      <button
        onClick={handleIncreaseClick}
        className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
      >
        +
      </button>
      <button
        onClick={handleRemoveClick}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        삭제
      </button>
    </div>
  );
};
