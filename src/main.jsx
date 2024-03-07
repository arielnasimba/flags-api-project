import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

const router = createBrowserRouter([
  {
    path: "/flags-api-project",
    element: <Home />,
  },
  {
    path: "/flags-api-project/detail/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);