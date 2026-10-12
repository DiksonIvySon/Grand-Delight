import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import restaurantFood from './assets/restaurantFood.jpg';
import heroBackground from '../images/feast.jpg';

function Header() {
  return (
    <header className="hero">
      {/* Full-bleed background image with overlay */}
      <div className="hero-bg">
        <img src={heroBackground} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <Logo />
          <p className="hero-tagline">
            Timeless prestige. Extraordinary cuisine.<br />
            On the 7th floor of The Leonardo, Sandton.
          </p>
          <div className="hero-ctas">
            <NavLink className="primary-btn hero-btn-primary" to="/bookingPage">
              Make a Reservation
            </NavLink>
            <NavLink className="primary-btn2 hero-btn-secondary" to="/menu">
              View Menu
            </NavLink>
          </div>
        </div>

        {/* Floating food card */}
        <div className="hero-card">
          <div className="hero-card-img">
            <img src={restaurantFood} alt="Grand Delight signature dish" loading="eager" />
          </div>
          <div className="hero-card-badge">
            <span>Open Daily</span>
            <strong>16:00 – 22:00</strong>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
