import React, {Component} from 'react';
import Nav from './Components/nav';
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';
import './App.css';


class App extends Component {
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

export default App;
