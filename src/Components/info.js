import React, {Component} from "react";
import MarioAndAdrianA from './assets/MarioAndAdrianA.jpg';
import MarioAndAdrianB from './assets/MarioAndAdrianB.jpg';

class Info extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="info">
                <div className="infoText">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                       sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                       do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
                <div className="info-images">
                    <div className="imageB">
                        <img src={MarioAndAdrianB} ></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;