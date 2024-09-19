import { createBrowserRouter } from "react-router-dom";

import { Main } from "@/pages/main";
import { baseLayout } from "./layouts/baseLayout";
import { notFound } from "./layouts/notFound";

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: notFound,
      children: [
        {
          path: "/",
          element: <Main />
        }
      ],
    },
  ]);
}
