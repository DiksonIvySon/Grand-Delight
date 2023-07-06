import React, {Component} from "react";
import Logo from './assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

class Nav extends Component {
    constructor() {
        super();
    
    this.state = {
        active: "nav",
    }

    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
}

    handleMenuIconClick() {
        if(this.state.active === "nav") {
            this.setState({
                active: "not-active",
            });
        }else {
            this.setState({
                active: "nav",
            });
        }
        
    }

    render() {
        return(
            <div className="navigation">
                <div>
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className={this.state.active}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/bookingPage">Reservation</NavLink></li>
                        <li><NavLink to="/orderOnline">Order Online</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
                <div className="hamburgerIcon" onClick={this.handleMenuIconClick}>
                    <FontAwesomeIcon icon={faBars} className="icon"/>
                </div>

            </div>
        );
    };
};

export default Nav;