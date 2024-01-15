import React from 'react';
import './SectionHeader.css';
import { GiKnifeFork } from "react-icons/gi";

function SectionHeader({SectionHeader_text}) {
  return (
    <div className='sectionHeader'>
        <div className='sectionHeader-container'>
            <GiKnifeFork className='fork-icon'/>
            <div>
                <hr/>
                <p>{SectionHeader_text}</p>
                <hr/>
            </div>
            <GiKnifeFork className='fork-icon'/>
        </div>
    </div>
  )
}

export default SectionHeader