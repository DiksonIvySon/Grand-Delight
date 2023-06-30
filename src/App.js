import React, {Component} from 'react';
import Home from './Components/home';
import './App.css';
import BookingPage from './Components/bookingpage';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <>
        <BookingPage />
      </>
    );
  }
}

export default App;
