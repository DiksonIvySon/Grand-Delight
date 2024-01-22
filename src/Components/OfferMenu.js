import React, { useState } from 'react';
import './OfferMenu.css';
import { NavLink } from "react-router-dom";

import SectionHeader from "./SectionHeader";

import restaurant2 from '../images/restaurant2.jpg';
import wood_background from '../images/wood-background.jpg';
import starters1_image from '../images/starters1-image.jpg';
import luxury_food from '../images/luxury-food.avif';
import luxury_drinks from '../images/luxury-drinks.avif';

function OfferMenu({offering_btn_visibility}) {

  return (
    <div className='offerMenu-container section-margin'>
        <SectionHeader SectionHeader_text="What We Offer"/>
        <div className='offerMenu'>
            <div className='offering'>
                <img className='offering-image' src={starters1_image} alt='offering image'></img>
                <h2>Starters</h2>
                <p>meaty</p>
                <p>vegetarian</p>
                <p>vegan</p>
            </div>
            <div className='offering middle-offering'>
                <h1>We Offer Only The Best</h1>
                <p>The Grand Delight stands to take an old-world approach to service with a modern, 
                   new-world approach to cuisine. The wine list has been designed in a way to 
                   convey the best on offer from around the world.
                </p>
                <NavLink className='primary-btn' id={offering_btn_visibility} to="/menu">View Menu</NavLink>
                <img src={luxury_food} alt='offering image'></img> 
                <h2>Mains</h2>
                <p>Breakfast</p>
                <p>Starter</p>
                <p>Meals</p>
                <p>Deserts</p>
            </div>
            <div className='offering'>
                <img src={luxury_drinks} alt='offering image'></img>
                <h2>Drinks</h2>
                <p>soft drinks</p>
                <p>wine & beer</p>
                <p>spirits</p>
            </div>
            <div className='woodBackground-container'>
                <img className='woodBackground' src={wood_background} alt='wood background image image'></img>
            </div>
        </div>
    </div>
  )
}

export default OfferMenu