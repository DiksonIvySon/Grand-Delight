import React from "react";
import Logo from "./Logo";
import restaurantFood from './assets/restaurantFood.jpg';

/**
 * Compact banner header used on all inner pages (Menu, About, Booking, etc.)
 * The home page uses homeHeader.js (full hero) instead.
 */
function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <Logo />
        <div className="page-header-img">
          <img src={restaurantFood} alt="Grand Delight restaurant" loading="lazy" />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
