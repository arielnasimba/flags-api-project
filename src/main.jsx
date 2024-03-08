import * as React from "react";
// import { useState, useEffect, useContext }  from 'react'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import App from "./App";
import { ThemeProvider } from "./FlagContext";


const router = createBrowserRouter([


  {
    path: "/flags-api-project",
    element: <App />,
  },
  {
    path: "/flags-api-project/detail/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ThemeProvider>

    <RouterProvider router={router} />

    </ThemeProvider>

  </React.StrictMode>
);