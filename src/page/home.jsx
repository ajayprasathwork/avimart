import React from 'react';
import './home.css'
import Nav from '../component/navbar/navbar.jsx'
import Hero from '../component/hero/hero.jsx';
import Cared from '../component/categories/categories.jsx'
import Pcard from '../component/continers/product'

const home = () => {
    return (
        <>        <Nav/>

        <div className='home'>
            <div className='main'>
                <Hero/>
                <Cared/>
            </div>
            <div className='side'></div>

        </div>
        </>

    );
};

export default home;