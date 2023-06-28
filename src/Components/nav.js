import React, {Component} from "react";
import Logo from './assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
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