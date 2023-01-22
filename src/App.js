import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Auth from './components/pages/Auth';
import Checkout from './components/pages/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, getCartData } from './store/cart-action';
import Products from './components/pages/Products';

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/checkout', element: <Checkout /> }
    ]
  },
  { path: '/login', element: <Auth /> }
])

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch])

  useEffect(() => {
      dispatch(sendCartData(cart));
    }, [cart, dispatch])
    
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
