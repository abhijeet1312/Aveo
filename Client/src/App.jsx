// import { useState } from 'react'
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import AveoStore from './components/AveoStore';
// import Shop from './components/Shop';
// import About from './components/About';
// import './App.css'

// function App() {
  

//   return (
//    <>
//      <Router>
//          <Routes>
//           <Route path="/" element={<AveoStore />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/about" element={<About />} />
//          </Routes>
//       </Router>
//    </>
//   )
// }

// export default App


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { store, persistor } from './redux/store';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import CartPage from './components/cart/CartPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './components/common/LoginPage';
import SignupPage from './components/common/SignupPage';
// import CartPage from './pages/CartPage';
// import './styles/globals.css';

function App() {


  
  return (
    <Provider store={store}>
      <PersistGate loading={<div className="min-h-screen flex items-center justify-center">Loading...</div>} persistor={persistor}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path='/products' element={<ProductsPage/>}/>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Layout>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#10b981',
                color: '#fff',
              },
            }}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App