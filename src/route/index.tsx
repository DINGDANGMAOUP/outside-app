import App from "@/App";
import ErrorElement from "@/ErrorElement";
import NotFound from "@/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter([
  {
    path: "/",
    Component: App,
    // children: tree,
    errorElement: <ErrorElement />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])


export default router;