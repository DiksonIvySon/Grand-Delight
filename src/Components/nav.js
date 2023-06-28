import React, {Component} from "react";

import Logo from './assets/Logo.svg';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="navigation">
                <div>
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Nav;