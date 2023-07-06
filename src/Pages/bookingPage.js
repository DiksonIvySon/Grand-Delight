import React, {Component} from "react";
import Nav from "../Components/nav";
import BookingHeader from "../Components/bookingHeader";
import Footer from "../Components/footer";
import SignupPopup from "../Components/signupPopup";
import { useState } from "react";


function Reservation() {
    const [inputs, setInputs] = useState({
        resDate:"",
        resTime:"",
        numberOfGuests:"",
        occasion:"",
        additionalRequirements:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => {
            return {...prev, [name]: value}
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
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
                            <label htmlFor="resDate">Choose date*
                                <br/>
                                <input 
                                type="date" 
                                id="resDate"
                                name="resDate" 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="resTime">Choose time*
                                <br/>
                                <select id="resTime" name="resTime" onChange={handleChange}>
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
                            <label htmlFor="numberOfGuests">Number of guests*
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
                            <label htmlFor="occasion">Occasion</label>
                            <br/>
                            <select id="occasion" name="occasion" onChange={handleChange}> 
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Family gathering</option>
                                <option>Reunion</option>
                                <option>celebration</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="additionalRequirements">Any additional requirements
                                <br/>
                                <textarea 
                                    id="additionalRequirements"
                                    name="additionalRequirements"
                                    placeholder="Please let us know of any additional requirements or requests here."
                                    onChange={handleChange} />
                            </label>
                        </div> 
                        
                    </div>
                    <div className="confirmButton">
                        <button type="submit" onClick={handleSubmit}>Confirm Reservation</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export function LoginForm() {
    
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <section className="login">
            <div className="login-title">
                <h1>Already have an account? <em>Login</em></h1>
            </div>
            <form>
                <div className="inputs">
                    <label>Enter your email:
                        <br/>
                        <input 
                            type="email" 
                            id="userName"
                            name="email" 
                            placeholder="ivySon@123"
                            onChange={handleChange}
                    />
                    </label>
                    
                    <label>Enter your password:
                        <br/>
                        <input 
                            type="text"
                            id="password" 
                            name="password" 
                            placeholder="ivy123"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="loginButton">
                    <button type="submit" onClick={handleSubmit}>Log in</button>
                </div>
                <div className="signUp-button">
                    <h4>Forgot your password</h4>
                    <h1>Don't have an account</h1>
                </div>
            </form>
        </section>
    );
}


export function SignUpForm() {

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
            <section>
                <nav className='nav'>
                    <Nav />
                </nav>
                <header className='header'>
                    <BookingHeader />
                </header>
                <main className='main-booking'>
                    <LoginForm />
                    <SignUpForm/>
                    <Reservation />
                </main>
                <footer className='footer'>
                    <Footer />
                </footer>
            </section>
        );
    }
}

export default BookingPage;