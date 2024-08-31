import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from "./pages/Cart"
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound';
import Profile from './components/Profile';



const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/404" element={<NotFound />} />{/*  En el punto 3 se pide que la ruta /404 lleve a Notfound */}
        <Route path="*" element={<NotFound />} /> {/* En el punto 4 se pide que cualquier ruta que no exista lleve a Notfount por eso se dejan ambas rutas :) */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
