import React from 'react';
import './categories.css';
import Pcard from '../continers/product.jsx'

const Shopbycategories = (props) => {
    return (
        <div className='Shopbycategories'>
            <div className='dfs'>
                <Pcard titel={props.tt} sub={props.sub}/>
            </div>

        </div>
    );
};

export default Shopbycategories;