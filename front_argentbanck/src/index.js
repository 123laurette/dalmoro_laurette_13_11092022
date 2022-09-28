import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import IndexHome from './pages/IndexHome';
import Footer from './components/footer/Footer';
import SignIn from './pages/SignIn';
import User from "./pages/User"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
    </Routes>

    <Footer />
    </Router>
  </Provider>      
      
  
);

//<Route path="/User/:id" element={<User />} />


