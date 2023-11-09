import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import { LoginForm } from './bookingPage';
import { SignUpForm } from './bookingPage';





class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className='body'>
        <nav className='nav'>
            <Nav />
        </nav>
        <header className='header'>
            <Header />
        </header>
        <main>
            <div className="header-heading">
                <h1>Login</h1>
            </div>
            <LoginForm />    
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </section>
    );
  }
}

export default Login;