import { createBrowserRouter } from "react-router-dom";

import { Main } from "@/pages/main";
import { Presentation } from "@/pages/presentation";
import { baseLayout } from "./layouts/baseLayout";
import { notFound } from "./layouts/notFound";
import { presentationLayout } from "./layouts/presentationLayout";

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
      element: presentationLayout,
      errorElement: notFound,
      children: [
        {
          path: "/presentation",
          element: <Presentation />
        }
      ]
    }
  ]);
}
