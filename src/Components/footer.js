import React, {Component} from "react";

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
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservation</a></li>
                            <li><a href="">Order Online</a></li>
                            <li><a href="">Login</a></li>
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