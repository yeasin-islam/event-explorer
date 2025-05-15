import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import CartProvider from './providers/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <CartProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
        </AuthProvider>
      </CartProvider>
    </StrictMode>
  </HelmetProvider>
)
