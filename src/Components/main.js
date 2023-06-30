import React, {Component} from "react";
import Specials from "./specials";
import Testimonials from "./testimonials";
import Info from "./info";

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <main>
                <Specials />
                <Testimonials />
                <Info />
            </main>
        );
    }
}

export default Main;