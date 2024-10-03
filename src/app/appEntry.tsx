import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"

import "@/app/styles";
import { appRouter } from "./appRouter";
import { appStore } from "./appStore";

const app = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);

app.render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  </React.StrictMode>
);