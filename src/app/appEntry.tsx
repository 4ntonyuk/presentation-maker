import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/app/styles";
import { appRouter } from "./appRouter";
import { appStore, persistedStore } from "./appStore";

const app = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);

app.render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
        <RouterProvider router={appRouter()} />
      {/* </PersistGate> */}
    </ReduxProvider>
  </React.StrictMode>
);