import React from 'react';
import './story.css';
import SectionHeader from './SectionHeader';
import { NavLink } from "react-router-dom";

import restaurant from './assets/restaurant.jpg';
import breakfast1 from '../images/breakfast1.png';
import salad1 from '../images/salad1.png';

function Story() {
  return (
    <div className='storySection-container section-margin'>
      <SectionHeader SectionHeader_text="Our Story" />
      <div className='storySection'>
        <div className='story-text'>
          <h1>Every Dish Tells A Story</h1>
          <p>
            True to its name, Grand Delight delivers timeless prestige with its unique culinary offerings,
            creating a golden experience in the modern day. "Grand Delight represents luxury, but not in
            an intimidating, pretentious or ostentatious manner. Just as gold is timeless in its
            appeal, we too wish to exist beyond time as a successful, renowned business, serving
            a cosmopolitan African city; the City of Gold."
          </p>
          <div>
            <h4>Book Through Call</h4>
            <h2>+27 (764) 765 7654</h2>
          </div>
          <NavLink className='primary-btn' to="/about">Read More</NavLink>
        </div>
        <div className='story-images'>
          <img className='story-restaurant' src={restaurant} alt='Grand Delight restaurant' />
          <img className='breakfast1' src={breakfast1} alt='Breakfast dish' />
        </div>
      </div>
      <img className='salad1' src={salad1} alt='Fresh salad' />
    </div>
  );
}

export default Story;
