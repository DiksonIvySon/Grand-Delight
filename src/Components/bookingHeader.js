import React, {Component} from "react";
import restaurant from './assets/restaurant.jpg'

class BookingHeader extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <header className="header">
                <div>
                    <div>
                        <h1 className="header-tittle">Little Lemon</h1>
                        <h3 className="restaurant-location">South Africa</h3>
                        <button className="bookingHeader-btn">Go back to home page</button>
                    </div>
                    <div className="restaurantFoot-img">
                        <img src={restaurant}></img>
                    </div>
                </div>
            </header>
        );
    }
}

export default BookingHeader;