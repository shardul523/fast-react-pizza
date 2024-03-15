import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        children: [
          {
            path: "new",
            element: <CreateOrder />,
          },
          {
            path: ":orderId",
            element: <Order />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
