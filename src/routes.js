import { createBrowserRouter } from "react-router-dom";
import ListView from "./pages/ListView";
import SingleProductView from "./pages/SingleProductView";
import EditProductView from "./pages/EditProductView";
import CreateProductView from "./pages/CreateProductView";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ListView />,
  },
  {
    path: "/single-product/:id",
    element: <SingleProductView />,
  },
  {
    path: "/edit-product/:id",
    element: <EditProductView />,
  },
  {
    path: "/create-product",
    element: <CreateProductView />,
  },
]);

export default routes;
