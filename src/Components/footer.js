import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import restaurant from './assets/restaurant.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="inFooter-container">
        <div className="footer-img">
          <img src={restaurant} alt="Grand Delight restaurant" />
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/bookingPage">Reservation</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><span>The Leonardo, Sandton, JHB</span></li>
            <li><span>+27 (764) 765 7654</span></li>
            <li><span>info@granddelight.co.za</span></li>
          </ul>
        </div>
        <div>
          <h4>Web Developer info</h4>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://diksonivyson.github.io/My_Portfolio/">
                Professional Portfolio
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dikson-manganye-a8b773213/">
                LinkedIn Account
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/DiksonIvySon">
                Github Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p>Copyright &copy; 2024 Dikson Thabo Manganye. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
