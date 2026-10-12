import React from "react";
import Logo from "./Logo";
import restaurantFood from './assets/restaurantFood.jpg';

function Header() {
  return (
    <header className="header">
      <div>
        <div>
          <Logo />
        </div>
        <div className="restaurantFoot-img">
          <img src={restaurantFood} alt="Grand Delight restaurant interior" loading="lazy" />
        </div>
      </div>
    </header>
  );
}

export default Header;
