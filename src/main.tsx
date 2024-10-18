import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './route'
import '@/utils/i18n'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="outside-app-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
