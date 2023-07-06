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
                        <h3 className="restaurant-location">Chicago</h3>
                        <p>Welcome to the reservation page,<br />
                           here you can make you reservation <br />
                           please feel free to Contact the  <br />
                           restaurant if there is a problem<br />
                           <em>please note that you wil have to create <br/>
                           an account if you don't have one</em>
                        </p>
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