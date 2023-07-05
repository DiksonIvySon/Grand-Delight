import { useState } from "react";

function SignupPopup(props) {

    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
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

    return(props.trigger) ? (
        <section className="signUp">
            <div>
                <div className="reservation-title">
                    <h1>Sign Up</h1>
                </div>
                <form>
                    <div className="inputs">
                        <div>
                            <label>First name*
                                <br/>
                            <input 
                                type="text" 
                                id="firstName"
                                name="firstName" 
                                placeholder="Dikson"
                                required
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Last name*
                                <br/>
                                <input 
                                type="text"
                                id="lastName" 
                                name="lastName" 
                                placeholder="Manganye"
                                required
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>E-mail*
                                <br/>
                                <input 
                                type="email"
                                id="email" 
                                name="email" 
                                placeholder="dikson@gmail.com"
                                required
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Phone number*
                                <br/>
                            <input 
                                type="text"
                                id="phoneNumber" 
                                name="phoneNumber" 
                                placeholder="0682648738"
                                required
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div>
                            <label>Set password*
                                <br/>
                                <input 
                                type="text" 
                                id="password"
                                name="password" 
                                placeholder="ivySon@1234"
                                required
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="close-signUp-button" onClick={() => props.setTrigger(false)}>
                        <button>Close</button>
                    </div>
                    <div className="signUp-button">
                        <button type="submit" onClick={handleSubmit}>Sign up</button>
                    </div>
                </form>
            </div>
        </section>
    ) : "";
}

export default SignupPopup;