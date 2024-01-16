import React from 'react'
import './MenuIntro.css';
import SectionHeader from './SectionHeader';
import { NavLink } from "react-router-dom";

import beefRibs1 from '../images/beefRibs1.png';
import lamskoteletten from '../images/lamskoteletten.jpg';

function MenuIntro() {
  return (
    <div className='menuIntro-container'>
        <div className='menuIntro'>
            <div className='menuIntro-images'>
                <img className='lamskoteletten' src={lamskoteletten} alt='lamskoteletten image'></img>
            </div>
            <div className='menuIntro-text'>
                <SectionHeader SectionHeader_text="Our Food" SectionHeader_color="darkMode"/>
                <h1>Soul Food</h1>
                <p>
                    “A meal at the Grand Delight will aim to engage our patrons on an emotional level. We want to create experiences, 
                    share memories, build strong relationships and gain the trust of our patrons through our product and 
                    service offering. The Grand Delight stands to take an old-world approach to service with a modern, new-world 
                    approach to cuisine,”. 
                </p>
                <div>
                    <h4>Grand Delight</h4>
                </div>
                <NavLink className='primary-btn' to="/menu">View Menu</NavLink>
            </div>
        </div>
    </div> 
  )
}

export default MenuIntro