

function SignupPopup(props) {

    return(props.trigger) ? (
        <section className="signUp">
            <div>
                <div className="reservation-title">
                    <h1>Sign Up</h1>
                </div>
                <form>
                    <div className="inputs">
                        <div>
                            <label>Date*
                                <br/>
                            <input 
                                type="text" 
                                name="username" 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Time*
                                <br/>
                                <input 
                                type="text" 
                                name="username" 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Number of People*
                                <br/>
                                <input 
                                type="number" 
                                name="age" 
                                />
                            </label>
                        </div>
                        <div>
                            <label>Date*
                                <br/>
                            <input 
                                type="text" 
                                name="username" 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Time*
                                <br/>
                                <input 
                                type="text" 
                                name="username" 
                            />
                            </label>
                        </div>
                        <div>
                            <label>Number of People*
                                <br/>
                                <input 
                                type="number" 
                                name="age" 
                                />
                            </label>
                        </div>
                    </div>
                    <div className="close-signUp-button" onClick={() => props.setTrigger(false)}>
                        <button type="submit">CLOSE</button>
                    </div>
                    <div className="signUp-button">
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </section>
    ) : "";
}

export default SignupPopup;