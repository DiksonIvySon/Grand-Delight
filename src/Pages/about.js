import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import Info from '../Components/info';


class About extends Component {
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
               <h1>About</h1>
            </div>
            <Info/>
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </section>
    );
  }
}

export default About;