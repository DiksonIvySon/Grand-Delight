import React from 'react';
import './DrinksPage.css';

import Nav from '../Components/nav';
import Header from '../Components/pageHeader';
import Footer from '../Components/footer';
import SectionHeader from '../Components/SectionHeader';

import drinksMenu1 from '../images/drinksMenu1.jpg';
import drinksMenu2 from '../images/drinksMenu2.jpg';
import drinksMenu3 from '../images/drinksMenu3.jpg';
import drinksMenu4 from '../images/drinksMenu4.jpg';
import drinksMenu5 from '../images/drinksMenu5.jpg';

function DrinksPage() {
  return (
    <section className='body'>
      <nav className='nav'>
        <Nav />
      </nav>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <SectionHeader SectionHeader_text="Drinks Menu" />
        <div className='drinksPage-container section-margin'>
          <div className='drinksPage-content'>
            <img className='drinksMenu-image' src={drinksMenu1} alt='Drinks menu page 1' loading="lazy" />
            <img className='drinksMenu-image' src={drinksMenu2} alt='Drinks menu page 2' loading="lazy" />
            <img className='drinksMenu-image' src={drinksMenu3} alt='Drinks menu page 3' loading="lazy" />
            <img className='drinksMenu-image' src={drinksMenu4} alt='Drinks menu page 4' loading="lazy" />
            <img className='drinksMenu-image' src={drinksMenu5} alt='Drinks menu page 5' loading="lazy" />
          </div>
        </div>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </section>
  );
}

export default DrinksPage;
