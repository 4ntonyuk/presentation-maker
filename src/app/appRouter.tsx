import { createBrowserRouter } from "react-router-dom";

import { Main } from "@/pages/main";
import { baseLayout } from "./layouts/baseLayout";
import { notFound } from "./layouts/notFound";
import { layoutWithSidebar } from "./layouts/layoutWithSidebar";

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
    {
      element: layoutWithSidebar,
      errorElement: notFound,
      children: [
        {
          path: "/presentation",
          element: <div>asd</div>
        }
      ]
    }
  ]);
}
