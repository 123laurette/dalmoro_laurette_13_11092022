import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import IndexHome from './pages/IndexHome';
//import User from "./pages/User"
//import SignIn from "./pages/SignIn"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexHome />} />
      {/*<Route path="/" element={<User />} />
      <Route path="/" element={<SignIn />} />*/}
    </Routes>

    </BrowserRouter>  
);


