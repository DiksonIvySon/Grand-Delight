import React from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import Main from '../Components/main';
import usePageTitle from '../hooks/usePageTitle';

function Home() {
  usePageTitle(null); // "Grand Delight Restaurant"
  return (
    <section className='body'>
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
    </section>
  );
}

export default Home;
