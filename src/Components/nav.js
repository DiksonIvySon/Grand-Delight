import React, { useState } from "react";
import GD_Logo from '../images/GD-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="navigation">
      <div>
        <img src={GD_Logo} alt="Grand Delight logo" />
      </div>
      <div className={menuOpen ? "nav" : "not-active"}>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink></li>
          <li><NavLink to="/bookingPage" onClick={() => setMenuOpen(false)}>Reservation</NavLink></li>
          <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
        </ul>
      </div>
      <div className="hamburgerIcon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>
    </div>
  );
}

export default Nav;
