import React from "react";
import './Main.css';

import Specials from "./specials";
import Testimonials from "./testimonials";
import Info from "./info";
import Story from "./Story";
import SectionHeader from "./SectionHeader";
import MenuIntro from "./MenuIntro";
import PlaceIntro from "./PlaceIntro";
import { NavLink } from "react-router-dom";

function Main() {
    
    return(
        <main>
            <SectionHeader SectionHeader_text="Grand Delight"/>
            <div className="intro-about">
                <div>
                    <p>
                    Meaning magnificent food presented with the aim of invoking emotions extreme pleasure and excitement. 
                    Grand Delight Restaurant opened its doors in November 2019, overlooking 
                    Sandton from the 7th floor of The Leonardo - which is South Africa's new tallest building. 
                    The restaurant is the brainchild of esteemed chef and culinary consultant, Paulo Santo, in 
                    collaboration with the Legacy Group and its chairman, Bart Dorrestein. 
                    </p>
                    <NavLink className='primary-btn' to="/about">About</NavLink>
                </div>
            </div>
            <Specials />
            <Story />
            <MenuIntro />
            <PlaceIntro />
            
        </main>
    );
}

export default Main;