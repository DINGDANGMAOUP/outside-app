import React from "react";
import ReactDOM from "react-dom/client";
import '@/styles/main.css'
import '@/utils/i18n'
import { RouterProvider } from "react-router-dom";
import router from "./route";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
