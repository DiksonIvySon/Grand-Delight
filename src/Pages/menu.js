import React, { useState } from 'react';
import Nav from '../Components/nav';
import Header from '../Components/pageHeader';
import Footer from '../Components/footer';
import Specials from '../Components/specials';
import SectionHeader from '../Components/SectionHeader';
import OfferMenu from '../Components/OfferMenu';
import { NavLink } from "react-router-dom";
import usePageTitle from '../hooks/usePageTitle';

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

/* ── Data ────────────────────────────────────────────────── */

const signatureDishes = [
  { key: 'Baked_Goat_Cheese',    title: "Baked Goat Cheese",    image: Baked_Goat_Cheese,    price: 134.72, description: "Baked Goat Cheese Salad." },
  { key: 'Garlicky_Braised_Lamb',title: "Garlicky Braised Lamb",image: Garlicky_Braised_Lamb, price: 134.72, description: "Garlicky Braised Lamb Shank with Sweet Pepper." },
  { key: 'Ham_Steaks',           title: "Ham Steaks",           image: Ham_Steaks,           price: 134.72, description: "Ham Steaks in Madeira Sauce." },
  { key: 'Poached_Eggs',         title: "Poached Eggs",         image: Poached_Eggs,         price: 134.72, description: "Poached Eggs with Red Wine Sauce." },
  { key: 'Seared_Salmon',        title: "Seared Salmon",        image: Seared_Salmon,        price: 134.72, description: "Seared Salmon with Summer Vegetables." },
  { key: 'Spaghetti',            title: "Spaghetti",            image: Spaghetti,            price: 134.72, description: "Spaghetti with Clams and Braised Greens." },
  { key: 'Swordfish',            title: "Swordfish",            image: Swordfish,            price: 134.72, description: "Swordfish Sicilian-Style." },
  { key: 'Vegetable',            title: "Vegetable Soup",       image: Vegetable,            price: 134.72, description: "Vegetable Hot-and-Sour Soup." },
];

const traditionalDishes = [
  { key: 'Bunny_chow',      title: "Bunny Chow",         image: Bunny_chow,      price: 175.27, description: "Hollowed out loaves of bread stuffed with spicy curry, originally created by the immigrant Indian community in Durban. Try chicken, pork or vegetarian varieties." },
  { key: 'Braai_Shisa_nyama',title:"Braai / Shisa Nyama",image: Braai_Shisa_nyama,price:195.63, description: "Usually comprising beef, chicken, pork, lamb and vors (sausages) — this is not an outing for vegetarians!" },
  { key: 'Bobotie',         title: "Bobotie",            image: Bobotie,         price: 134.72, description: "Minced meat simmered with spices, curry powder, herbs and dried fruit, then topped with a mixture of egg and milk and baked until set." },
  { key: 'Biltong_droewors',title:"Biltong & Droewors",  image: Biltong_droewors,price: 183.64, description: "The meat is cured in a mixture of vinegar, salt, sugar and spices such as coriander and pepper, then hung to dry. Prized for its high protein and low fat content." },
  { key: 'Chakalaka_pap',   title: "Chakalaka & Pap",   image: Chakalaka_pap,   price: 139.89, description: "Chakalaka is a vegetable dish made of onions, tomatoes, peppers, carrots, beans and spices. Pap is a starchy dish made from white corn maize, similar to American grits." },
  { key: 'Cape_Malay_curry',title: "Cape Malay Curry",  image: Cape_Malay_curry,price: 135.85, description: "Aromatic spices such as cinnamon, saffron, turmeric and chilli create fragrant curries and stews, which are still popular in the area today." },
  { key: 'Boerewors',       title: "Boerewors",         image: Boerewors,       price: 183.26, description: "A traditional South African sausage made from beef, mixed with either pork or lamb and a mixture of spices. Traditionally served coiled and cooked on a braai." },
  { key: 'bruchetta',       title: "Bruchetta",         image: bruchetta,       price: 115.99, description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
  { key: 'greekSalad',      title: "Greek Salad",       image: greekSalad,      price: 112.99, description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
  { key: 'Tacos',           title: "Mexican Tacos",     image: tacos,           price: 134.72, description: "Traditional Mexican beef tacos made with marinated sliced or shredded beef on soft corn tortillas." },
];

const dessertDishes = [
  { key: 'Melktert',       title: "Melktert",         image: Melktert,       price: 24.37,  description: "Similar to the British custard tart, melktert consists of a pastry case filled with milk, eggs and sugar, thickened with flour." },
  { key: 'Malva_pudding',  title: "Malva Pudding",    image: Malva_pudding,  price: 64.75,  description: "A sweet and sticky baked sponge pudding made with apricot jam, served smothered in a hot cream sauce." },
  { key: 'Amarula',        title: "Amarula Don Pedro",image: Amarula_Don_Pedro,price:72.56, description: "A cream liqueur made from the indigenous marula fruit, blended with ice cream." },
  { key: 'lemonDessert',   title: "Lemon Dessert",    image: lemonDessert,   price: 115.88, description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
];

const breakfastDishes = [
  { key: 'Eggs_Benedict',  title: "Eggs Benedict",   image: Eggs_Benedict,  price: 115.88, description: "A classic Hollandaise-topped eggs Benedict to start your day, served with roasted potatoes." },
  { key: 'Cheese_Sandwich',title: "Cheese Sandwich", image: Cheese_Sandwich,price: 115.88, description: "Fresh bread with your choice of meats, vegetables and only the best cheese." },
  { key: 'Yogurt_Parfait', title: "Yogurt Parfait",  image: Yogurt_Parfait, price: 115.88, description: "A fancy trifle-style parfait that looks great in a glass and tastes even better." },
  { key: 'French_Toast',   title: "French Toast",    image: French_Toast,   price: 115.88, description: "Delicious served hot with butter and maple syrup. Available in white, whole wheat, brioche, or cinnamon-raisin." },
];

const drinksList = [
  { key: 'Apple_Juice',  title: "Apple Juice",  price: 37 },
  { key: 'Orange_Juice', title: "Orange Juice", price: 35 },
  { key: 'Aloe_vera',    title: "Aloe Vera",    price: 26 },
  { key: 'cock',         title: "Coca Cola",    price: 18 },
  { key: 'pepsi',        title: "Pepsi",        price: 18 },
  { key: 'appletiser',   title: "Appletiser",   price: 23 },
  { key: 'grapetiser',   title: "Grapetiser",   price: 23 },
  { key: 'redbull',      title: "Redbull",      price: 26 },
];

/* ── Sub-components ──────────────────────────────────────── */

function MenuItem({ foods }) {
  return (
    <div className="foodItem-container">
      <div className="foodItem-info">
        <div className='foodItem-img-des'>
          <div className="foodItem-image">
            <img src={foods.image} alt={foods.title} loading="lazy" />
          </div>
          <div className='foodItem-img-des-info'>
            <div>
              <div className='priceAndTitle'>
                <h3 className="menuItem-title">{foods.title}</h3>
                <div className="foodItem-price">
                  <h3>R{foods.price}</h3>
                </div>
              </div>
              <hr />
              <p className="foodItem-description">{foods.description}</p>
            </div>
            <div className='foodItem-btn'>
              <NavLink className='primary-btn' to="/bookingPage">Reserve a table</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignatureDish({ foods }) {
  return (
    <div className="signatureDish-container">
      <div className="signatureDish-info">
        <div className="signatureDish-image">
          <img src={foods.image} alt={foods.title} loading="lazy" />
        </div>
        <div className='signatureDish-img-des-info'>
          <p className="signatureDish-description">{foods.description}</p>
          <div className='priceAndTitle'>
            <div className="signatureDish-price">
              <h3>R{foods.price}</h3>
            </div>
            <div className='signatureDish-btn'>
              <NavLink className='primary-btn' to="/bookingPage">Reserve a table</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DrinkItem({ drink }) {
  return (
    <div className="drinkItem-container">
      <div className='drinkItem'>
        <div>
          <h4 className="drinkItem-title">{drink.title}</h4>
          <h3>|</h3>
          <div className="drinkItem-price">
            <h3>R{drink.price}</h3>
          </div>
        </div>
        <NavLink className='primary-btn2' to="/bookingPage">Reserve a table</NavLink>
      </div>
      <hr />
    </div>
  );
}

/* ── Category tab definitions ────────────────────────────── */

const TABS = [
  { id: 'all',        label: 'All' },
  { id: 'signature',  label: 'Signature' },
  { id: 'traditional',label: 'Traditional' },
  { id: 'desserts',   label: 'Desserts & Breakfast' },
  { id: 'drinks',     label: 'Drinks' },
];

/* ── Category sections ───────────────────────────────────── */

function SignatureSection() {
  return (
    <div className='menu-section'>
      <SectionHeader SectionHeader_text="Our Signature Dishes" />
      <div className='SignatureDish-menu section-margin'>
        {signatureDishes.map((dish) => (
          <SignatureDish key={dish.key} foods={dish} />
        ))}
      </div>
    </div>
  );
}

function TraditionalSection() {
  return (
    <div className='menu-section'>
      <SectionHeader SectionHeader_text="Traditional Menu" />
      <div className='traditional-menu section-margin'>
        {traditionalDishes.map((dish) => (
          <MenuItem key={dish.key} foods={dish} />
        ))}
      </div>
      {/* Specials uses the original Specials component unchanged */}
      <Specials />
    </div>
  );
}

function DessertsSection() {
  return (
    <div className='menu-section'>
      <SectionHeader SectionHeader_text="Desserts &amp; Breakfast" />
      <div className='dessertsAndBreakfast section-margin'>
        <div className='Desserts'>
          <h2>Desserts</h2>
          {dessertDishes.map((dish) => (
            <MenuItem key={dish.key} foods={dish} />
          ))}
        </div>
        <div className='Breakfast'>
          <h2>Breakfast</h2>
          {breakfastDishes.map((dish) => (
            <MenuItem key={dish.key} foods={dish} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DrinksSection() {
  return (
    <div className='menu-section drinks-section'>
      <SectionHeader SectionHeader_text="Drinks" />
      <div className='section-margin drinks-list'>
        {drinksList.map((drink) => (
          <DrinkItem key={drink.key} drink={drink} />
        ))}
      </div>
      <p className='section-margin'>
        Please note that the following are only available for dine-in (no online orders):
      </p>
      <p className='section-margin'>
        Alcohol Drinks &nbsp;|&nbsp; Hot Drinks &nbsp;|&nbsp; Milkshakes &nbsp;|&nbsp; Some Cold Drinks
      </p>
      <NavLink className='primary-btn2' to="/drinksPage">Open Complete Drinks Menu</NavLink>
    </div>
  );
}

/* ── Main Menu page ──────────────────────────────────────── */

function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  usePageTitle('Menu');

  const show = (id) => activeTab === 'all' || activeTab === id;

  return (
    <section className='body'>
      <nav className='nav'>
        <Nav />
      </nav>
      <header className='header'>
        <Header />
      </header>
      <main>
        {/* What We Offer banner — always visible */}
        <OfferMenu offering_btn_visibility="offering-btn-hide" />

        {/* ── Filter tab bar ── */}
        <div className='menu-tabs-wrapper section-margin'>
          <div className='menu-tabs' role="tablist" aria-label="Menu categories">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`menu-tab ${activeTab === tab.id ? 'menu-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Category sections ── */}
        <div className='menu'>
          {show('signature')   && <SignatureSection />}
          {show('traditional') && <TraditionalSection />}
          {show('desserts')    && <DessertsSection />}
          {show('drinks')      && <DrinksSection />}
        </div>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </section>
  );
}

export default Menu;
