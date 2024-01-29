import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Products from "./pages/Products.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Cart from "./pages/Cart.jsx"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <App />
    </Layout>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/cart",
    element: <Layout> <Cart /></Layout>
  }, {
    path: "/products",
    element: <Layout> <Products /></Layout>
  },
  {
    path: "/product/:id",
    element: <Layout><ProductDetails /></Layout>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
