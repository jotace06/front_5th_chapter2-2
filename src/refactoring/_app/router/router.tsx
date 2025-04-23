import { createHashRouter } from "react-router-dom";

import { RootLayout } from "../../_widgets/layouts";
import { CartPage } from "../../_pages/cart";
import { AdminPage } from "../../_pages/admin";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <CartPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);
