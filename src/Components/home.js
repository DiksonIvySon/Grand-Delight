import React, {Component} from 'react';
import Nav from './nav';
import Header from './homeHeader';
import Footer from './footer';
import Main from './main';


class Home extends Component {
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
        <main className='main'>
            <Main />
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </body>
    );
  }
}

export default Home;
