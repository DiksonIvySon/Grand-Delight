import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import Specials from '../Components/specials';
import SectionHeader from '../Components/SectionHeader';
import OfferMenu from '../Components/OfferMenu';

import { NavLink } from "react-router-dom";
import { IoAdd } from "react-icons/io5";


/* food images */
import greekSalad from '../Components/assets/greekSalad.jpg';
import bruchetta from '../Components/assets/bruchetta.svg';
import lemonDessert from '../Components/assets/lemonDessert.jpg';
import Biltong_droewors from '../Components/assets/Biltong_droewors.webp';
import Boerewors from '../Components/assets/Boerewors.webp';
import Cape_Malay_curry from '../Components/assets/Cape_Malay_curry.webp';
import Malva_pudding from '../Components/assets/Malva_pudding.webp';
import Chakalaka_pap from '../Components/assets/Chakalaka_pap.webp';
import Braai_Shisa_nyama from '../Components/assets/Braai_Shisa_nyama.webp';
import Bunny_chow from '../Components/assets/Bunny_chow.webp';
import Amarula_Don_Pedro from '../Components/assets/Amarula_Don_Pedro.webp';
import Bobotie from '../Components/assets/Bobotie.webp';
import Melktert from '../Components/assets/Melktert.webp';
import tacos from '../Components/assets/tacos.jpg';
import Eggs_Benedict from '../Components/assets/Eggs_Benedict.webp';
import Cheese_Sandwich from '../Components/assets/Cheese_Sandwich.webp';
import Yogurt_Parfait from '../Components/assets/Yogurt_Parfait.webp';
import French_Toast from '../Components/assets/French_Toast.webp';
import Baked_Goat_Cheese from '../Components/assets/Baked_Goat_Cheese.webp';
import Garlicky_Braised_Lamb from '../Components/assets/Garlicky_Braised_Lamb.webp';
import Ham_Steaks from '../Components/assets/Ham_Steaks.webp';
import Poached_Eggs from '../Components/assets/Poached_Eggs.webp';
import Seared_Salmon from '../Components/assets/Seared_Salmon.webp';
import Spaghetti from '../Components/assets/Spaghetti.webp';
import Swordfish from '../Components/assets/Swordfish.webp';
import Vegetable from '../Components/assets/Vegetable.webp';

/* drinks images */


const foodTypes = {
    greekSalad: {title: "Greek Salad",
                image: greekSalad,
                price: 112.99,
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                },
    bruchetta: {title: "Bruchetta",
                image: bruchetta ,
                price: 115.99,
                description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " ,
                },
    Biltong_droewors: {title: "Biltong & droewors",
                image: Biltong_droewors,
                price: 183.64,
                description: "The meat is cured in a mixture of vinegar, salt, sugar and spices such as coriander and pepper, then hung to dry. The finished product is prized by health enthusiasts for its high protein and low fat content." ,
                },
    Boerewors: {title: "Boerewors",
                image: Boerewors,
                price: 183.26,
                description: "This is a traditional South African sausage made from beef, mixed with either pork or lamb and a mixture of spices. Boerewors are traditionally served in a coiled shape, similar to the Cumberland sausage and cooked on a braai (barbecue)." ,
                },
    Cape_Malay_curry: {title: "Cape Malay curry",
                image: Cape_Malay_curry,
                price: 135.85,
                description: "When combined with local produce, the aromatic spices such as cinnamon, saffron, turmeric and chilli created fragrant curries and stews, which are still popular in the area today." ,
                },
    Chakalaka_pap: {title: "Chakalaka & pap",
                image: Chakalaka_pap,
                price: 139.89,
                description: " Chakalaka is a vegetable dish made of onions, tomatoes, peppers, carrots, beans and spices, and is often served cold. Pap, meaning 'porridge', is similar to American grits and is a starchy dish made from white corn maize. " ,
                },
    Braai_Shisa_nyama: {title: "Braai/Shisa nyama",
                image: Braai_Shisa_nyama,
                price: 195.63,
                description: "Usually comprising of beef, chicken, pork, lamb and vors (sausages) – this is not an outing for vegetarians!" ,
                },
    Bunny_chow: {title: "Bunny chow",
                image: Bunny_chow,
                price: 175.27,
                description: "Hollowed out loaves of bread, stuffed with spicy curry were originally created by the immigrant Indian community in the Natal area of Durban and served to workers for lunch. Try chicken, pork or vegetarian varieties containing lentils and beans." ,
                },
    Bobotie: {title: "Bobotie",
                image: Bobotie,
                price: 134.72,
                description: "Minced meat is simmered with spices, usually curry powder, herbs and dried fruit, then topped with a mixture of egg and milk and baked until set." ,
                },
    Tacos: {title: "Mexican Tacos",
                image: tacos,
                price: 134.72,
                description: "Traditional Mexican beef tacos are made with marinated sliced or shredded beef on soft corn tortillas." ,
                },

    // Signature dishes.

    Poached_Eggs: {title: "Poached Eggs",
                image: Poached_Eggs,
                price: 134.72,
                description: "Poached Eggs with Red Wine Sauce" ,
                },
    Garlicky_Braised_Lamb: {title: "Garlicky Braised Lamb",
                image: Garlicky_Braised_Lamb,
                price: 134.72,
                description: "Garlick Braised Lamb Shank, Sweet Pepper" ,
                },
    Baked_Goat_Cheese: {title: "Baked Goat Cheese",
                image: Baked_Goat_Cheese,
                price: 134.72,  
                description: "Baked Goat Cheese Salad" ,
                },
    Seared_Salmon: {title: "Seared Salmon",
                image: Seared_Salmon,
                price: 134.72,
                description: "Seared Salmon with Summer Vegetables" ,
                },
    Swordfish: {title: "Swordfish",
                image: Swordfish,
                price: 134.72,
                description: "Swordfish Sicilian-Style" ,
                },
    Ham_Steaks: {title: "Ham Steaks",
                image: Ham_Steaks,
                price: 134.72,
                description: "Ham Steaks in Madeira Sauce" ,
                },
    Spaghetti: {title: "Spaghetti",
                image: Spaghetti,
                price: 134.72,
                description: "Spaghetti with Clams and Braised Greens" ,
                },
    Vegetable: {title: "Vegetable",
                image: Vegetable,
                price: 134.72,
                description: "Vegetable Hot-and-Sour Soup" ,
                }
                
  
};

const dessertS = {
    Melktert: {title: "Melktert",
            image: Melktert,
            price: 24.37,
            description: "Similar to the British custard tart or Portuguese pasteis de nata, melktert consists of a pastry case filled with milk, eggs and sugar, which is usually thickened with flour." ,
            },
    Amarula_Don_Pedro: {title: "Amarula Don Pedro",
            image: Amarula_Don_Pedro,
            price: 72.56,
            description: "a cream liqueur made from the indigenous marula fruit, blended with ice cream. Find it in every bar or take a bottle of Amarula home from duty-free to make your own!" ,
            },
    Malva_pudding: {title: "Malva pudding",
            image: Malva_pudding,
            price: 64.75,
            description: "malva pudding is a sweet and sticky baked sponge pudding made with apricot jam and served smothered in a hot cream sauce." ,
            },
    lemonDessert: {title: "Lemon Dessert",
            image: lemonDessert,
            price: 115.88,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." ,
            },
    Eggs_Benedict: {title: "Eggs Benedict",
            image: Eggs_Benedict,
            price: 115.88,
            description: "There's nothing like a classic, Hollandaise-topped eggs Benedict to start your day. Serving with roasted potatoes to mop up the extra egg yolks and sauce." ,
            },
    Cheese_Sandwich: {title: "Cheese Sandwich",
            image: Cheese_Sandwich,
            price: 115.88,
            description: "Try one of our favorite Fancy Grilled Cheese Sandwiches. Fresh bread with your choice meats and vegetables and only the best cheese." ,
           },
    Yogurt_Parfait: {title: "Yogurt Parfait",
            image: Yogurt_Parfait,
            price: 115.88,
            description: "A parfait is basically a fancy trifle that you can serve for breakfast. It looks great in a glass, but can also be made in a bowl." ,
           },
    French_Toast: {title: "French Toast",
            image: French_Toast,
            price: 115.88,
            description: "white, whole wheat, brioche, cinnamon-raisin, Italian, or French! Delicious served hot with butter and maple syrup." ,
           },
}

const drinksType = {
    cock: {title: "Coka Cola",
            price: 18,
            },

    pepsi: {title: "Pepsi",
            price: 18,
            },

    grapetiser: {title: "Grapetiser",
            price: 23,
            },

    appletiser: {title: "Appletiser",
            price: 23,
            },

    redbull: {title: "Redbull",
            price: 26,
            },

    Orange_Juice: {title: "Orange Juice",
            price: 35,
            },
    Apple_Juice: {title: "Apple Juice",
            price: 37,
            },

    Aloe_vera: {title: "Aloe Vera",
            price: 26,
            },
}

function MenuItem({foods}) {

  return (
    <div className="foodItem-container">
        <div>
            <div className="foodItem-info">
                <div className='foodItem-img-des'>
                    <div className="foodItem-image">
                        <img src={foods.image} alt="food item image"></img>
                    </div>
                    <div className='foodItem-img-des-info'>
                        <div>
                            <div className='priceAndTitle'>
                                <div>
                                    <h3 className="menuItem-title">{foods.title}</h3>
                                </div>
                                <div className="foodItem-price">
                                    <h3>R{foods.price}</h3>
                                </div>
                            </div>
                            <hr />
                            <p className="foodItem-description">{foods.description}</p>
                        </div>
                        <div className='foodItem-btn'>
                            <NavLink className='primary-btn' to="/about">Add To Cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

function SignatureDish({foods}) {

    return (
        <div className="signatureDish-container">
            <div>
                <div className="signatureDish-info">
                    <div className="signatureDish-image">
                        <img src={foods.image} alt="food item image"></img>
                    </div>
                    <div className='signatureDish-img-des-info'>
                        <p className="signatureDish-description">{foods.description}</p>
                        <div className='priceAndTitle'>
                            <div className="signatureDish-price">
                                <h3>R{foods.price}</h3>
                            </div>
                            <div className='signatureDish-btn'>
                                <NavLink className='primary-btn' to="/about">Add To Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

function DrinkItem({drinks}) {

  return (
    <div className="drinkItem-container">
        <div className='drinkItem'>
            <div>
                <h4 className="drinkItem-title">{drinks.title}</h4>
                <h3>|</h3>
                <div className="drinkItem-price">
                    <h3>R{drinks.price}</h3>
                </div>
            </div>
            <NavLink className='primary-btn2' to="/about">Add To Cart</NavLink>
        </div>
        <hr />
    </div>
  )
}

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='body'>
        <nav className='nav'>
            <Nav />
        </nav>
        <header className='header'>
            <Header />
        </header>
        <main>
            <OfferMenu />
            <div className='menu'>
                <SectionHeader SectionHeader_text="Our Signature Dish Menu"/>
                <div className='SignatureDish-menu section-margin'>
                    <SignatureDish foods={foodTypes.Baked_Goat_Cheese}/>
                    <SignatureDish foods={foodTypes.Garlicky_Braised_Lamb}/>
                    <SignatureDish foods={foodTypes.Ham_Steaks}/>
                    <SignatureDish foods={foodTypes.Poached_Eggs}/>
                    <SignatureDish foods={foodTypes.Seared_Salmon}/>
                    <SignatureDish foods={foodTypes.Spaghetti}/>
                    <SignatureDish foods={foodTypes.Swordfish}/>
                    <SignatureDish foods={foodTypes.Vegetable}/>
                </div>
                <div className='drinks-section'>
                    <SectionHeader SectionHeader_text="Drinks"/>
                    <div className='section-margin'>
                        <DrinkItem drinks={drinksType.Apple_Juice}/>
                        <DrinkItem drinks={drinksType.Orange_Juice}/>
                        <DrinkItem drinks={drinksType.Aloe_vera}/>
                        <DrinkItem drinks={drinksType.cock}/>
                        <DrinkItem drinks={drinksType.pepsi}/>
                        <DrinkItem drinks={drinksType.appletiser}/>
                        <DrinkItem drinks={drinksType.grapetiser}/>
                        <DrinkItem drinks={drinksType.redbull}/>
                    </div>
                    <p className='section-margin'>
                        Please note that alcohol drinks are only available on seat in and no online orders.
                    </p>
                    <NavLink className='primary-btn2' to="/about">Open Alcohol Menu</NavLink>
                </div> 
                <SectionHeader SectionHeader_text="Traditional Menu"/>
                <div className='traditional-menu section-margin'>
                    <MenuItem foods={foodTypes.Bunny_chow}/>
                    <MenuItem foods={foodTypes.Braai_Shisa_nyama}/>
                    <MenuItem foods={foodTypes.Bobotie}/>
                    <MenuItem foods={foodTypes.Biltong_droewors}/>
                    <MenuItem foods={foodTypes.Chakalaka_pap}/>
                    <MenuItem foods={foodTypes.Cape_Malay_curry}/>
                    <MenuItem foods={foodTypes.Boerewors}/>
                    <MenuItem foods={foodTypes.bruchetta}/>
                    <MenuItem foods={foodTypes.greekSalad}/>
                    <MenuItem foods={foodTypes.Tacos}/>
                </div>
                <Specials />
                <SectionHeader SectionHeader_text="Desserts and Breakfast"/>
                <div className='dessertsAndBreakfast section-margin'>
                    <div className='Desserts'>
                        <h2>Desserts</h2>
                        <MenuItem foods={dessertS.Melktert}/>
                        <MenuItem foods={dessertS.Malva_pudding}/>
                        <MenuItem foods={dessertS.Amarula_Don_Pedro}/>
                        <MenuItem foods={dessertS.lemonDessert}/>
                    </div>
                    <div className='Breakfast'>
                        <h2>Breakfast</h2>
                        <MenuItem foods={dessertS.Eggs_Benedict}/>
                        <MenuItem foods={dessertS.Cheese_Sandwich}/>
                        <MenuItem foods={dessertS.Yogurt_Parfait}/>
                        <MenuItem foods={dessertS.French_Toast}/>
                    </div>
                </div>
            </div>
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </section>
    );
  }
}

export default Menu;