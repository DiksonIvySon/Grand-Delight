import React, {Component} from "react";

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
                        <button>Reserve a Table</button>
                    </div>
                    <div className="restaurantFoot-img">
                        <img src={restaurantFood}></img>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;