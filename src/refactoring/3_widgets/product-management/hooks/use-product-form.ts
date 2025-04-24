import { useState } from "react";
import { ProductFormData } from "../../../6_shared/types";

const initialFormData: ProductFormData = {
  name: "",
  price: 0,
  stock: 0,
  discounts: [],
};

export const useProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);

  const handleNameChange = (value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
  };

  const handlePriceChange = (value: number) => {
    setFormData((prev) => ({ ...prev, price: value }));
  };

  const handleStockChange = (value: number) => {
    setFormData((prev) => ({ ...prev, stock: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleNameChange,
    handlePriceChange,
    handleStockChange,
    resetForm,
  };
};
