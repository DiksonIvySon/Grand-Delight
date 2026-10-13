import React from "react";
import Nav from "../Components/nav";
import Header from "../Components/pageHeader";
import Footer from "../Components/footer";
import SignupPopup from "../Components/signupPopup";
import { useState } from "react";
import successfulPhoto from "../Components/assets/success.gif";
import usePageTitle from "../hooks/usePageTitle";

/* ── Helpers ─────────────────────────────────────────────── */

function codeGenerator(characters) {
  const codeLength = 10;
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    code += characters.substring(randomNumber, randomNumber + 1);
  }
  return code;
}

/** Returns today's date as a YYYY-MM-DD string for the min attribute */
function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm   = String(today.getMonth() + 1).padStart(2, '0');
  const dd   = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/** Format YYYY-MM-DD → "12 October 2026" for the confirmation screen */
function formatDate(dateStr) {
  if (!dateStr) return "";
  const [yyyy, mm, dd] = dateStr.split('-');
  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ── Reservation form ────────────────────────────────────── */

function Reservation() {
  const [madeReservation, setMadeReservation] = useState("reservation-show");
  const [reservationStatus, setReservationStatus] = useState("unSuccessfulRes");
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    resDate: "",
    resTime: "Select",
    numberOfGuests: "",
    resCode: "",
    occasion: "Select",
    additionalRequirements: "No additional requirements",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!inputs.resDate) {
      newErrors.resDate = "Please choose a date.";
    }

    if (inputs.resTime === "Select" || !inputs.resTime) {
      newErrors.resTime = "Please choose a time.";
    }

    if (!inputs.numberOfGuests || Number(inputs.numberOfGuests) < 1) {
      newErrors.numberOfGuests = "Please enter the number of guests (min 1).";
    }

    if (inputs.occasion === "Select" || !inputs.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    return newErrors;
  };

  const handleMadeReservation = () => {
    setMadeReservation("reservation-show");
    setReservationStatus("unSuccessfulRes");
    setInputs({
      resDate: "",
      resTime: "Select",
      numberOfGuests: "",
      resCode: "",
      occasion: "Select",
      additionalRequirements: "No additional requirements",
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setMadeReservation("reservation-hide");
    setReservationStatus("successfulRes");
    const characters = inputs.resDate + inputs.resTime + inputs.occasion;
    setInputs((prev) => ({ ...prev, resCode: codeGenerator(characters) }));
  };

  return (
    <section className="reservation">

      {/* ── Success screen ── */}
      <div className={reservationStatus}>
        <div className="successfulRes-header">
          <span className="successfulRes-checkmark">✓</span>
          <h1>Reservation Confirmed!</h1>
          <p>Please keep your reservation code safe — it will be required to claim your table.</p>
        </div>
        <div className="successfulRes-details">
          <div className="successfulRes-info">
            <h2>Reservation Details</h2>
            <ul>
              <li><strong>Date:</strong><span>{formatDate(inputs.resDate)}</span></li>
              <li><strong>Time:</strong><span>{inputs.resTime}</span></li>
              <li>
                <strong>Reservation Code:</strong>
                <span className="resCode">{inputs.resCode}</span>
              </li>
              <li><strong>Guests:</strong><span>{inputs.numberOfGuests}</span></li>
              <li><strong>Occasion:</strong><span>{inputs.occasion}</span></li>
            </ul>
            {inputs.additionalRequirements !== "No additional requirements" && (
              <p><strong>Additional Requirements:</strong><br />{inputs.additionalRequirements}</p>
            )}
          </div>
          <div className="successfulRes-img">
            <img src={successfulPhoto} alt="Reservation confirmed" loading="lazy" />
          </div>
        </div>
        <button className="primary-btn" onClick={handleMadeReservation}>
          Make another reservation
        </button>
      </div>

      {/* ── Form ── */}
      <div className={madeReservation}>
        <div className="reservation-title">
          <h1>Make a Reservation</h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="inputs">

            {/* Date — min set to today, no past dates */}
            <div>
              <label htmlFor="resDate">Choose date *
                <br />
                <input
                  type="date"
                  id="resDate"
                  name="resDate"
                  value={inputs.resDate}
                  min={getTodayString()}
                  onChange={handleChange}
                  className={errors.resDate ? 'input-error' : ''}
                />
              </label>
              {errors.resDate && <p className="field-error">{errors.resDate}</p>}
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="numberOfGuests">Number of guests *
                <br />
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={inputs.numberOfGuests}
                  placeholder="1"
                  min="1"
                  max="15"
                  onChange={handleChange}
                  className={errors.numberOfGuests ? 'input-error' : ''}
                />
              </label>
              {errors.numberOfGuests && <p className="field-error">{errors.numberOfGuests}</p>}
            </div>

            {/* Additional requirements */}
            <div>
              <label htmlFor="additionalRequirements">Any additional requirements (Optional)
                <br />
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  placeholder="Please let us know of any dietary requirements, allergies or special requests."
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Occasion + Time selects */}
            <div className="selections">
              <div>
                <label htmlFor="occasion">Occasion *</label>
                <br />
                <select
                  id="occasion"
                  name="occasion"
                  value={inputs.occasion}
                  onChange={handleChange}
                  className={errors.occasion ? 'input-error' : ''}
                >
                  <option value="Select" disabled>Select occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Family gathering</option>
                  <option>Reunion</option>
                  <option>Celebration</option>
                  <option>Business dinner</option>
                  <option>Date night</option>
                  <option>Other</option>
                </select>
                {errors.occasion && <p className="field-error">{errors.occasion}</p>}
              </div>
              <div>
                <label htmlFor="resTime">Choose time *
                  <br />
                  <select
                    id="resTime"
                    name="resTime"
                    value={inputs.resTime}
                    onChange={handleChange}
                    className={errors.resTime ? 'input-error' : ''}
                  >
                    <option value="Select" disabled>Select time</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                  </select>
                </label>
                {errors.resTime && <p className="field-error">{errors.resTime}</p>}
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

/* ── Login form ──────────────────────────────────────────── */

export function LoginForm() {
  const [renderSignUp, setRenderSignUp] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
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
          <button
            className="create-account-button primary-btn"
            type="button"
            onClick={() => setRenderSignUp((prev) => !prev)}
          >
            Create new Account
          </button>
        </form>
      </div>
      {renderSignUp && (
        <SignupPopup toggleRenderSignUp={() => setRenderSignUp(false)} />
      )}
    </section>
  );
}

/* ── Booking page ────────────────────────────────────────── */

function BookingPage() {
  usePageTitle('Reservation');
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
