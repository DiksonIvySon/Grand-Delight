import React from 'react';
import './Logo.css';

import { GiCook } from "react-icons/gi";

function logo() {
  return (
    <div className='web-logo'>
        <div className='web-logo-symbol'>
            <h1>GD</h1>
            <div className='symbol-word'>
                <h4 className='symbol-word-grand'>Grand</h4>
                <GiCook className='symbol-word-chef'/>
                <h4 className='symbol-word-delight'>Delight</h4>
            </div>
        </div>
    </div>
  )
}

export default logo