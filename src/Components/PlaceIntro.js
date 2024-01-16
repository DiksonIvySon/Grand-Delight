import React from 'react';
import './PlaceIntro.css';
import SectionHeader from './SectionHeader';
import { NavLink } from "react-router-dom";

import restaurant2 from '../images/restaurant2.jpg';
import restaurant3 from '../images/restaurant3.jpg';
import restaurant4 from '../images/restaurant4.jpg';

function PlaceIntro() {
  return (
    <div className='placeIntro-container'>
        <SectionHeader SectionHeader_text="Space and Atmosphere"/>
            <div className="placeIntro">
                <div>
                    <p>
                        From the main artwork installation representing a golden flow of air, the gold and green paint hues, 
                        together with the clever selection of custom designed furniture combining natural leathers and 
                        timbers with subtle touches of gold throughout were all designed and curated to showcase the design 
                        frameworks. 
                    </p>
                    <div className='placeIntro-links'>
                        <NavLink className='primary-btn' to="/about">Read and See More</NavLink>
                        <NavLink className='primary-btn' to="/bookingPage">Make A Reservation</NavLink>
                    </div>
                    <div className='placeIntro-images'>
                        <img className='restaurant2' src={restaurant2} alt='restaurant image'></img>
                        <img className='restaurant3' src={restaurant3} alt='restaurant image'></img>
                        <img className='restaurant4' src={restaurant4} alt='restaurant image'></img>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PlaceIntro