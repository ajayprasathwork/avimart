import React from 'react';
import img1 from '../../img/categories.png'
import cimg from '../../img/cimgset.js';
import './product.css'
const Shopby = () => {
    return (
        <div className='shopby-wrapper'>
            <div className='shopby-continer'>
                <div className='sc-head'><p>Shop by categories <span>No handling fees + free shipping on orders over $35*</span></p></div>
                <div className='sc-prodect-bx'>
                    {cimg.map((item)=>{
                        return(<div className='sc-prodect-bx-card'>
                        <img src={item.img}/>
                        
                    </div>)
                    })}
                   
                   
                </div>
            </div>
            
        </div>
    );
};

export default Shopby;