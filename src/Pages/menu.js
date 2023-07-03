import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';


class Menu extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <body className='body'>
        <nav className='nav'>
            <Nav />
        </nav>
        <header className='header'>
            <Header />
        </header>
        <main>

        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </body>
    );
  }
}

export default Menu;