import React from "react";
import Specials from "./specials";
import Testimonials from "./testimonials";
import Info from "./info";
import Story from "./Story";
import SectionHeader from "./SectionHeader";

function Main() {
    
    return(
        <main>
            <SectionHeader />
            <Specials />
            <Story />
            <Info />
        </main>
    );
}

export default Main;