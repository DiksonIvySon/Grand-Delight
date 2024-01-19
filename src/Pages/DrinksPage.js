import React from 'react';
import './DrinksPage.css';

import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import SectionHeader from '../Components/SectionHeader';

import drinksMenu1 from '../images/drinksMenu1.jpg';
import drinksMenu2 from '../images/drinksMenu2.jpg';
import drinksMenu3 from '../images/drinksMenu3.jpg';
import drinksMenu4 from '../images/drinksMenu4.jpg';
import drinksMenu5 from '../images/drinksMenu5.jpg';

function DrinksPage() {
  return (
    <div>
        <Nav />
        <Header />
        <SectionHeader SectionHeader_text="Drinks Menu"/>
        <div className='drinksPage-container section-margin'>
            <div className='drinksPage-content'>
                <img className='drinksMenu-image' src={drinksMenu1} alt='Drinks Menu'></img>
                <img className='drinksMenu-image' src={drinksMenu2} alt='Drinks Menu'></img>
                <img className='drinksMenu-image' src={drinksMenu3} alt='Drinks Menu'></img>
                <img className='drinksMenu-image' src={drinksMenu4} alt='Drinks Menu'></img>
                <img className='drinksMenu-image' src={drinksMenu5} alt='Drinks Menu'></img>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default DrinksPage