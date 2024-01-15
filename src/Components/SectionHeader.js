import React from 'react';
import './SectionHeader.css';
import { GiKnifeFork } from "react-icons/gi";

function SectionHeader() {
  return (
    <div className='sectionHeader'>
        <div className='sectionHeader-container'>
            <GiKnifeFork className='fork-icon'/>
            <div>
                <hr/>
                <p>Menu</p>
                <hr/>
            </div>
            <GiKnifeFork className='fork-icon'/>
        </div>
    </div>
  )
}

export default SectionHeader