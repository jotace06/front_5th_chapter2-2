import { Product, Discount, ProductFormData } from "../../6_shared/types";

export interface ProductAccordionItemProps {
  product: Product;
  index: number;
  onUpdate: (updatedProduct: Product) => void;
}

export interface ProductEditFormProps {
  product: Product;
  onFieldChange: (field: keyof Product, value: string | number) => void;
  onAddDiscountClick: (discount: Discount) => void;
  onRemoveDiscountClick: (index: number) => void;
  onSaveClick: () => void;
}

export interface DiscountListProps {
  discounts: Discount[];
}

export interface DiscountEditorProps {
  discounts: Discount[];
  onAddDiscountClick: (discount: Discount) => void;
  onRemoveDiscountClick: (index: number) => void;
}

export interface NewProductFormProps {
  onSubmit: (product: ProductFormData) => void;
}

export interface ProductManagementPanelProps {
  title?: string;
}
