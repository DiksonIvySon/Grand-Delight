import React from 'react'

import Specials from "./specials";
import Testimonials from "./testimonials";
import Info from "./info";
import Story from "./Story";
import SectionHeader from "./SectionHeader";
import MenuIntro from "./MenuIntro";
import PlaceIntro from "./PlaceIntro";
import { NavLink } from "react-router-dom";

function Events() {
  return (
    <div className='events-container'>
        <SectionHeader SectionHeader_text="Grand Delight"/>
        <div className='events'>
            <div className='event-card'>
                <img src='' alt=''></img>
                <h3>Date Night</h3>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Events