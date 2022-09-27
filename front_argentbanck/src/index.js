import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import IndexHome from './pages/IndexHome';
import Footer from './components/footer/Footer';
import SignIn from './pages/SignIn';
import User from "./pages/User"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  
);

//<Route path="/User/:id" element={<User />} />


