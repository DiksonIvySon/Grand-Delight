import React, { useState, useEffect } from "react";
import GD_Logo from '../images/GD-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`navigation ${scrolled ? 'navigation--scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={GD_Logo} alt="Grand Delight logo" />
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/drinksPage">Drinks</NavLink></li>
          <li><NavLink to="/bookingPage">Reservation</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>

        {/* Hamburger toggle */}
        <button
          className="hamburgerIcon"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="icon" />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/menu" onClick={closeMenu}>Menu</NavLink></li>
              <li><NavLink to="/drinksPage" onClick={closeMenu}>Drinks</NavLink></li>
              <li><NavLink to="/bookingPage" onClick={closeMenu}>Reservation</NavLink></li>
              <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Nav;
