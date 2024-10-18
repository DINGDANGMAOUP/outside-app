import React from "react";
import ReactDOM from "react-dom/client";
import '@/utils/i18n'
import { RouterProvider } from "react-router-dom";
import './styles/main.css'
import router from "./route";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="outside-app-theme">
     <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
