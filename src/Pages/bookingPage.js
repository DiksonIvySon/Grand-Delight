import React from "react";
import Nav from "../Components/nav";
import Header from "../Components/pageHeader";
import Footer from "../Components/footer";
import SignupPopup from "../Components/signupPopup";
import { useState } from "react";
import successfulPhoto from "../Components/assets/success.gif";


function codeGenerator(characters) {
  const codeLength = 10;
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    code += characters.substring(randomNumber, randomNumber + 1);
  }
  return code;
}


function Reservation() {
  const [madeReservation, setMadeReservation] = useState("reservation-show");
  const [reservationStatus, setReservationStatus] = useState("unSuccessfulRes");
  const [inputs, setInputs] = useState({
    resDate: "",
    resTime: "",
    numberOfGuests: "",
    resCode: "",
    occasion: "",
    additionalRequirements: "No additional requirements",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleMadeReservation = () => {
    setMadeReservation((prev) =>
      prev === "reservation-hide" ? "reservation-show" : "reservation-hide"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputs.resDate === "" ||
      inputs.resTime === "" ||
      inputs.numberOfGuests === "" ||
      inputs.occasion === "" ||
      inputs.occasion === "Select"
    ) {
      alert("Please enter all required input fields!");
    } else {
      setMadeReservation("reservation-hide");
      setReservationStatus("successfulRes");
      const characters = inputs.resDate + inputs.resTime + inputs.occasion;
      const new_input = { ...inputs, resCode: codeGenerator(characters) };
      setInputs(new_input);
    }
  };

  return (
    <section className="reservation">
      <div className={reservationStatus}>
        <h1>Your Reservation was made successfully!</h1>
        <p>Please keep your reservation code very safe — it will be required to claim your table.</p>
        <div className="successfulRes-details">
          <div>
            <h2>Reservation Details</h2>
            <ul>
              <li><strong>Reservation Date: </strong><span>{inputs.resDate}</span></li>
              <li><strong>Reservation Time: </strong><span>{inputs.resTime}</span></li>
              <li><strong className="resCode">Reservation Code: </strong><span>{inputs.resCode}</span></li>
              <li><strong>Number of expected guests: </strong><span>{inputs.numberOfGuests}</span></li>
              <li><strong>Occasion: </strong><span>{inputs.occasion}</span></li>
            </ul>
            <p><strong>Additional Requirements:<br /></strong>{inputs.additionalRequirements}</p>
          </div>
          <div>
            <img src={successfulPhoto} alt="Reservation confirmed" loading="lazy" />
          </div>
        </div>
        <button className="primary-btn" onClick={handleMadeReservation}>Make changes</button>
      </div>
      <div className={madeReservation}>
        <div className="reservation-title">
          <h1>Make Reservation</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div>
              <label htmlFor="resDate">Choose date*
                <br />
                <input
                  type="date"
                  id="resDate"
                  name="resDate"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="numberOfGuests">Number of guests*
                <br />
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
              <label htmlFor="additionalRequirements">Any additional requirements (Optional)
                <br />
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  placeholder="Please let us know of any additional requirements or requests here."
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="selections">
              <div>
                <label htmlFor="occasion">Occasion*</label>
                <br />
                <select id="occasion" name="occasion" onChange={handleChange}>
                  <option>Select</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Family gathering</option>
                  <option>Reunion</option>
                  <option>Celebration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="resTime">Choose time*
                  <br />
                  <select id="resTime" name="resTime" onChange={handleChange}>
                    <option>Select</option>
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
            </div>
          </div>
          <div className="confirmButton">
            <button className="primary-btn" type="submit">Confirm Reservation</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function LoginForm() {
  const [renderSignUp, setRenderSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const toggleRenderSignUp = () => {
    setRenderSignUp((prev) => !prev);
  };

  return (
    <section>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label>Enter your email:
              <br />
              <input
                type="email"
                id="userName"
                name="email"
                placeholder="your@email.com"
                onChange={handleChange}
              />
            </label>
            <label>Enter your password:
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="loginButton">
            <button className="primary-btn" type="submit">Log in</button>
          </div>
          <div className="signUp-button">
            <h4>Forgot your password?</h4>
            <h4>Don't have an account?</h4>
          </div>
          <button className="create-account-button primary-btn" type="button" onClick={toggleRenderSignUp}>
            Create new Account
          </button>
        </form>
      </div>
      {renderSignUp && (
        <SignupPopup toggleRenderSignUp={toggleRenderSignUp} />
      )}
    </section>
  );
}


function BookingPage() {
  return (
    <section>
      <nav className='nav'>
        <Nav />
      </nav>
      <header className='header'>
        <Header />
      </header>
      <main className='main-booking section-margin'>
        <div className="header-heading">
          <h1>Reservation</h1>
        </div>
        <Reservation />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </section>
  );
}

export default BookingPage;
