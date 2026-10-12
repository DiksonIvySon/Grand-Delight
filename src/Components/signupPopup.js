import { useState } from "react";

function SignupPopup({ toggleRenderSignUp }) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputs.firstName === "" ||
      inputs.lastName === "" ||
      inputs.email === "" ||
      inputs.phoneNumber === "" ||
      inputs.password === ""
    ) {
      alert("Please enter all required information in the sign-up form.");
    } else {
      console.log(inputs);
    }
  };

  return (
    <section className="signUp">
      <div>
        <div className="reservation-title">
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div>
              <label>First name*
                <br />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Last name*
                <br />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>E-mail*
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Phone number*
                <br />
                <input
                  type="tel"
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
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="signUp-button">
            <button className="primary-btn" type="submit">Sign up</button>
            <button className="primary-btn" type="button" onClick={toggleRenderSignUp}>Close form</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignupPopup;
