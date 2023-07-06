import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import restaurant from './assets/restaurant.jpg'

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <footer className="footer">
                <div className="inFooter-container">
                    <div>
                        <img src={restaurant}></img>
                    </div>
                    <div>
                        <h4>Doormat <br /> Navigation</h4>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/menu">Menu</NavLink></li>
                            <li><NavLink to="/bookingPage">Reservation</NavLink></li>
                            <li><NavLink to="/orderOnline">Order Online</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="">Address</a></li>
                            <li><a href="">phone number</a></li>
                            <li><a href="">email</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href="">Address</a></li>
                            <li><a href="">phone number</a></li>
                            <li><a href="">email</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;