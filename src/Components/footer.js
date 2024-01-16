import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import restaurant from './assets/restaurant.jpg'

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <footer className="footer">
                <div className="footer-logo">
                    <Logo />
                </div>
                <div className="inFooter-container">
                    <div className="footer-img">
                        <img src={restaurant}></img>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/menu">Menu</NavLink></li>
                            <li><NavLink to="/bookingPage">Reservation</NavLink></li>
                            <li><NavLink to="/orderOnline">Open cart</NavLink></li>
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
                        <h4>Web Developer info</h4>
                        <ul>
                            <li><a target="_blank" href="https://diksonivyson.github.io/My_Portfolio/">Professional Portfolio</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/dikson-manganye-a8b773213/">LinkedIn Account</a></li>
                            <li><a target="_blank" href="https://github.com/DiksonIvySon">Github Account</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <p>Copyright @ 2024 Dikson Thabo Manganye All rights reserved</p>
                </div>
            </footer>
        );
    }
}

export default Footer;