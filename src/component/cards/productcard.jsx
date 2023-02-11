import React from 'react';
import './style.css'
import Pkoli from '../../img/pkoli.png'
const productcard = (props) => {
    return (
        <div className='productcard'>
           <div className='pro-img'>
            <img src={Pkoli}/>
           </div>
           <div className='pro-details'>
           </div>
        </div>
    );
};

export default productcard;