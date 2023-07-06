import React, {Component} from "react"
import greekSalad from './assets/greekSalad.jpg'
import bruchetta from './assets/bruchetta.svg'
import lemonDessert from './assets/lemonDessert.jpg'
import { NavLink } from "react-router-dom"


/*const foodTypeArray = {
    greekSalad: {title: "Greek Sala",
                image: greekSalad,
                price: 12.99,
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                },
    bruchetta: {title: "Bruchetta",
                image: bruchetta ,
                price: 5.99,
                description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " ,
               },
    lemonDessert: {title: "Lemon Dessert",
                   image: lemonDessert,
                   price: 5.00,
                   description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." ,
                  }
};*/

function FoodCard(props) {
    const foodType = props.foodType;

    return(
        <div className="card">
            <img src={foodType}></img>
            <div className="card-tittle">
                <div>
                    <h4>Greek Salad</h4>
                </div>
                <div>
                    <h4 className="card-price">$12.99</h4>
                </div>
            </div>
            <p className="card-description">
                The famous greek salad of 
                crispy lettuce, peppers, olives
                and our Chicago style feta 
                cheese, garnished with 
                crunchy garlic and rosemary 
                croutons.   
            </p>
            <h5 className="card-delivery">Order a delivery </h5>
        </div>
    );
}

class Specials extends Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return(
            <section className="main">
                <div>
                    <div className="main-tittle">
                        <div>
                            <h1>This weeks specials!</h1>
                        </div>
                        <div>
                            <NavLink to="orderOnline">Order Online</NavLink>
                        </div>
                    </div>
                    <div className="food-card">
                        <FoodCard foodType={bruchetta}/>
                        <FoodCard foodType={greekSalad}/>
                        <FoodCard foodType={lemonDessert}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Specials;