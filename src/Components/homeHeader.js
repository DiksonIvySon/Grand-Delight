import React, {Component} from "react";
import Logo from "./Logo";
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
                        <Logo />
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