import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import Specials from '../Components/specials';

/* food images */
import greekSalad from '../Components/assets/greekSalad.jpg'
import bruchetta from '../Components/assets/bruchetta.svg'
import lemonDessert from '../Components/assets/lemonDessert.jpg'
import Biltong_droewors from '../Components/assets/Biltong_droewors.webp'
import Boerewors from '../Components/assets/Boerewors.webp'
import Cape_Malay_curry from '../Components/assets/Cape_Malay_curry.webp'
import Malva_pudding from '../Components/assets/Malva_pudding.webp'
import Chakalaka_pap from '../Components/assets/Chakalaka_pap.webp'
import Braai_Shisa_nyama from '../Components/assets/Braai_Shisa_nyama.webp'
import Bunny_chow from '../Components/assets/Bunny_chow.webp'
import Amarula_Don_Pedro from '../Components/assets/Amarula_Don_Pedro.webp'
import Bobotie from '../Components/assets/Bobotie.webp'
import Melktert from '../Components/assets/Melktert.webp'

/* dinks images */
import cock_pepsi from '../Components/assets/cock_pepsi.jpg'
import grap_apple from '../Components/assets/grap_apple.jpeg'
import redbull from '../Components/assets/redbull.jpeg'
import blackLabol from '../Components/assets/blackLabol.jpeg'
import corona from '../Components/assets/corona.jpeg'
import heineken from '../Components/assets/heineken.jpeg'

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
              description: "usually comprising of beef, chicken, pork, lamb and vors (sausages) – this is not an outing for vegetarians!" ,
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
}

const drinks = {
  cock_pepsi: {title: "Coka Cola or Pepsi",
            image: cock_pepsi,
            price: 18,
            },
  grap_apple: {title: "Grapetiser or Appletiser",
            image: grap_apple,
            price: 23,
            },
  redbull: {title: "Redbull",
            image: redbull,
            price: 26,
            },
  blackLabol: {title: "Black Labol",
            image: blackLabol,
            price: 35,
            },
  corona: {title: "Corona",
            image: corona,
            price: 37,
            },
  heineken: {title: "Heineken",
            image: heineken,
            price: 26,
            },
}

function MenuItem({foods}) {

  return (
      <div className="foodItem-container">
          <div>
              <div>
                  <h4 className="menuItem-title">{foods.title}</h4>
              </div>
              <div className="foodItem-info">
                  <div className='foodItem-img-des'>
                      <div className="foodItem-image">
                          <img src={foods.image} alt="food item image"></img>
                      </div>
                      <div>
                          <p className="foodItem-description">{foods.description}</p>
                      </div>
                  </div>
                  <div className="foodItem-price">
                      <h3>R{foods.price}</h3>
                  </div>
              </div>
          </div>
          <hr></hr>
      </div>
  )
}

function DrinkItem({drinks}) {

  return (
      <div className="foodItem-container">
          <div>
              <div className="foodItem-info">
                  <div className="foodItem-image">
                      <img src={drinks.image} alt="food item image"></img>
                  </div>
                  <div className="foodItem-price">
                      <h3>R{drinks.price}</h3>
                  </div>
              </div>
              <div>
                  <h4 className="menuItem-title">{drinks.title}</h4>
              </div>
          </div>
          <hr></hr>
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
            <Specials />
            <div className='menu'>
              <h1 className='menu-section-title'>MENU</h1>
              <MenuItem foods={foodTypes.Bunny_chow}/>
              <MenuItem foods={foodTypes.Braai_Shisa_nyama}/>
              <MenuItem foods={foodTypes.Bobotie}/>
              <MenuItem foods={foodTypes.Biltong_droewors}/>
              <MenuItem foods={foodTypes.Chakalaka_pap}/>
              <MenuItem foods={foodTypes.Cape_Malay_curry}/>
              <MenuItem foods={foodTypes.Boerewors}/>
              <MenuItem foods={foodTypes.bruchetta}/>
              <MenuItem foods={foodTypes.greekSalad}/>
              <h1 className='menu-section-title'>DESSERTS</h1>
              <MenuItem foods={dessertS.Melktert}/>
              <MenuItem foods={dessertS.Malva_pudding}/>
              <MenuItem foods={dessertS.Amarula_Don_Pedro}/>
              <MenuItem foods={dessertS.lemonDessert}/>
              <h1 className='menu-section-title'>DRINKS</h1>
              <h2>SOFT DRINKS</h2>
              <div>
              <DrinkItem drinks={drinks.cock_pepsi} />
              <DrinkItem drinks={drinks.grap_apple} />
              <DrinkItem drinks={drinks.redbull} />
              </div>
              <h2>BEERS</h2>
              <DrinkItem drinks={drinks.blackLabol} />
              <DrinkItem drinks={drinks.corona} />
              <DrinkItem drinks={drinks.heineken} />
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