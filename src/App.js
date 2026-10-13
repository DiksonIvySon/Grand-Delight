import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTransition from './Components/PageTransition';
import ScrollToTop from './Components/ScrollToTop';
// pages
import BookingPage from './Pages/bookingPage';
import Home from './Pages/home';
import About from './Pages/about';
import Login from './Pages/login';
import Menu from './Pages/menu';
import DrinksPage from './Pages/DrinksPage';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/drinksPage" element={<DrinksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
