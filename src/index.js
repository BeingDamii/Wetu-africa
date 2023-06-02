import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LocationPage from "./pages/location-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/location/:id",
    element: <LocationPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
