import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import BookingPage from './Pages/bookingPage';
import Home from './Pages/home';
import About from './Pages/about';
import Login from './Pages/login';
import Menu from './Pages/menu';
import OrderOnline from './Pages/orderOnline';
import ReservationConfirmation from './Pages/reservationComfirmation';
import DrinksPage from './Pages/DrinksPage';



class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bookingPage" element={<BookingPage />} />
            <Route path="/drinksPage" element={<DrinksPage />} />
            {/*<Route path="/orderOnline" element={<OrderOnline />} />*/}
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
