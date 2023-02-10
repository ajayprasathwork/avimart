import React from 'react';
import './hero.css'
import panner from '../../img/paneer1.webp'
import Arrow from '../carouselarrow/productarrow.jsx'

const hero = () => {
    
    return (
        <div className='hero'>
            <div className='panneradd'>
                
                <img src={panner}/>
                
                <Arrow/>

            </div>
            <div className='panneradd-side'>
                <div className='panneradd-side-1'></div>
                <div className='panneradd-side-2'></div>
                <div className='panneradd-side-3'></div>
            </div>

            
        </div>
    );
};

export default hero;