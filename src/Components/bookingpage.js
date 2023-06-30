import React, {Component} from "react";
import Nav from "./nav";
import BookingHeader from "./bookingHeader";
import Footer from "./footer";
import { useState } from "react";

function Login() {

    const [inputs, setInputs] = useState({});

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
        <section className="login">
            <div className="login-title">
                <h1>Already have an account? <em>Login</em></h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label>Enter your name:
                        <br/>
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    
                    <label>Enter your password:
                        <br/>
                        <input 
                        type="number" 
                        name="age" 
                        value={inputs.age || ""} 
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="loginButton">
                    <button type="submit" >Log in</button>
                </div>
                <div className="signUp-button">
                    <h4>Forgot your password</h4>
                    <h1>Don't have an account</h1>
                    <div>
                        <button>Sign up</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

function Reservation() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
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
                            <label>Date*
                                <br/>
                            <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Time*
                                <br/>
                                <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Number of People*
                                <br/>
                                <input 
                                type="number" 
                                name="age" 
                                value={inputs.age || ""} 
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Any additional requirements
                                <br/>
                                <textarea value={textarea} onChange={handleChange} />
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

function SignUp() {

    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
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
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div>
                            <label>Date*
                                <br/>
                            <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Time*
                                <br/>
                                <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Number of People*
                                <br/>
                                <input 
                                type="number" 
                                name="age" 
                                value={inputs.age || ""} 
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Date*
                                <br/>
                            <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Time*
                                <br/>
                                <input 
                                type="text" 
                                name="username" 
                                value={inputs.username || ""} 
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Number of People*
                                <br/>
                                <input 
                                type="number" 
                                name="age" 
                                value={inputs.age || ""} 
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="signButton">
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
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
                    <SignUp />
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