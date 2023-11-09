import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import restaurantFood from './assets/restaurantFood.jpg'

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <header className="header">
                <div>
                    <div>
                        <h1 className="header-tittle">Little Lemon</h1>
                        <h3 className="restaurant-location">Chicago</h3>
                        <p>We are a family owned <br />
                        Mediterranean restaurant, <br />
                        focused on traditional <br />
                        recipes served with a modern <br />
                        twist.
                        </p>
                        <NavLink to="bookingPage">Reserve a Table</NavLink>
                    </div>
                    <div className="restaurantFoot-img">
                        <img src={restaurantFood}></img>
                    </div>
                </div>
                <div className="header-heading">
                    <h1>Reservation</h1>
                </div>
            </header>
        );
    }
}

export default Header;