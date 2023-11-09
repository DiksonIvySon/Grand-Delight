import { useState } from "react";

function SignupPopup({toggleRenderSignUp}) {
    const [submitted, setSubmitted] = useState(false);
    const [inputs, setInputs] = useState({
        firstName:"dshfikuj",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const new_inputs = {...inputs, [name]: value}
        setInputs(new_inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.firstName=="" || inputs.lastName=="" || inputs.email=="" || inputs.phoneNumber=="" || inputs.password=="") {
            alert("Please Enter all required information in the sing-up form")
        }
        else {
            setSubmitted(true)
            console.log(inputs);
        }
        
    }

    return ( 
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
                    
                    <div className="signUp-button">
                        <button type="submit" onClick={handleSubmit}>Sign up</button>
                        <button onClick={toggleRenderSignUp}>Close form</button>
                    </div>
                </form>
            </div>
            
        </section>
    );
}

export default SignupPopup;