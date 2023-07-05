import React, {Component} from "react";
import Nav from "../Components/nav";
import BookingHeader from "../Components/bookingHeader";
import Footer from "../Components/footer";
import SignupPopup from "../Components/signupPopup";
import { useState } from "react";


function Reservation() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState(
        ""
      );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return(
        <section className="reservation">
            <div>
                <div className="reservation-title">
                    <h1>Make Reservation</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div>
                            <label for="res-date">Choose date*
                                <br/>
                            <input 
                                type="date" 
                                id="res-date"
                                name="res-date" 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label for="res-time">Choose time*
                                <br/>
                                <select id="res-time">
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                </select>
                            </label> 
                        </div>
                        <div>
                            <label for="numberOfGuests">Number of guests*
                                <br/>
                                <input 
                                type="number" 
                                id="numberOfGuests"
                                name="numberOfGuests" 
                                placeholder="1"
                                min="1"
                                max="15"
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label for="occasion">Occasion</label>
                            <br/>
                            <select id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Family gathering</option>
                                <option>Reunion</option>
                                <option>celebration</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div>
                            <label for="additionalRequirements">Any additional requirements
                                <br/>
                                <textarea 
                                    id="additionalRequirements"
                                    placeholder="Please let us know of any additional requirements or requests here."
                                    value={textarea} 
                                    onChange={handleChange} />
                            </label>
                        </div> 
                        
                    </div>
                    <div className="confirmButton">
                        <button type="submit">Confirm Reservation</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

class Login  extends Component {
    
    render() {
        return(
            <section className="login">
                <div className="login-title">
                    <h1>Already have an account? <em>Login</em></h1>
                </div>
                <form>
                    <div className="inputs">
                        <label>Enter your name:
                            <br/>
                        <input 
                            type="text" 
                            name="username" 
                        />
                        </label>
                        
                        <label>Enter your password:
                            <br/>
                            <input 
                            type="number" 
                            name="age" 
                            />
                        </label>
                    </div>
                    <div className="loginButton">
                        <button type="submit" >Log in</button>
                    </div>
                    <div className="signUp-button">
                        <h4>Forgot your password</h4>
                        <h1>Don't have an account</h1>
                    </div>
                </form>
            </section>
        );
    }
   
}

function SignUp() {

    const [buttonPopup, setButtonPopup] = useState(false);
    
    return(
        <section className="signUp">
            <div className="signUp-btn">
                <button onClick={() => setButtonPopup(true)}>Sign up</button>
            </div>
            <br></br>
            <SignupPopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </section>
    );
}

class BookingPage extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <body>
                <nav className='nav'>
                    <Nav />
                </nav>
                <header className='header'>
                    <BookingHeader />
                </header>
                <main className='main-booking'>
                    <Login />
                    <SignUp/>
                    <Reservation />
                </main>
                <footer className='footer'>
                    <Footer />
                </footer>
            </body>
        );
    }
}

export default BookingPage;