import { useState } from "react";
import { CouponFormData, NewCouponFormProps } from "../types";

export const NewCouponForm: React.FC<NewCouponFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CouponFormData>({
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0,
  });

  const handleSubmitClick = () => {
    onSubmit(formData);
    setFormData({
      name: "",
      code: "",
      discountType: "percentage",
      discountValue: 0,
    });
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="쿠폰 이름"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="쿠폰 코드"
        value={formData.code}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, code: e.target.value }))
        }
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <select
          value={formData.discountType}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              discountType: e.target.value as "amount" | "percentage",
            }))
          }
          className="w-full p-2 border rounded"
        >
          <option value="amount">금액(원)</option>
          <option value="percentage">할인율(%)</option>
        </select>
        <input
          type="number"
          placeholder="할인 값"
          value={formData.discountValue}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              discountValue: parseInt(e.target.value),
            }))
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSubmitClick}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
};
