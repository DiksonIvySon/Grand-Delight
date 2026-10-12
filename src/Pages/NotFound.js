import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Components/nav';
import Footer from '../Components/footer';
import { GiCook } from 'react-icons/gi';

function NotFound() {
  return (
    <section className='body'>
      <nav className='nav'>
        <Nav />
      </nav>
      <main className='main'>
        <div className='notFound-container'>
          <GiCook className='notFound-icon' />
          <h1 className='notFound-code'>404</h1>
          <h2 className='notFound-title'>Table Not Found</h2>
          <p className='notFound-message'>
            Looks like this page wandered off the menu.<br />
            Let us guide you back to something delicious.
          </p>
          <div className='notFound-links'>
            <NavLink className='primary-btn' to='/'>Back to Home</NavLink>
            <NavLink className='primary-btn2' to='/menu'>View Menu</NavLink>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </section>
  );
}

export default NotFound;
