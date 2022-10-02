import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/IndexHome"
import SignIn from './pages/SignIn';
import User from './pages/User';
import { Provider } from 'react-redux';
import store from "./redux/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/profile' element={<User />} />
        </Routes>

        <Footer />
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

