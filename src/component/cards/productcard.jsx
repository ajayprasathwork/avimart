import React from 'react';
import './style.css'
import Pkoli from '../../img/pkoli.png'
import {Rate} from 'antd';
const productcard = (props) => {
    return (
        <div className='productcard'>
           <div className='pro-img'>
            <img src={Pkoli}/>
           </div>
           <div className='pro-details'>
            <p className='catagory'>Drink</p>
            <p className='name'>Rockstar Punched Energy Drink, Fruit Punch</p>
            <Rate allowHalf defaultValue={2.5} style={{fontSize:'15px'}} />
            <p className='rate'>$168.00</p>
           </div>
        </div>
    );
};

export default productcard;