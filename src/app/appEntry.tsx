import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/app/styles";
import { appRouter } from "./appRouter";

const app = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);

app.render(
  <React.StrictMode>
    <RouterProvider router={appRouter()} />
  </React.StrictMode>
);