import React from 'react';
import './home.css'
import Nav from '../component/navbar/navbar.jsx'
import Hero from '../component/hero/hero.jsx';
import Cared from '../component/categories/categories.jsx'
import Pcard from '../component/continers/product'
import Shopby from '../component/continers/shopby.jsx'
import panner from '../img/Banner.png';
const home = () => {
    return (
        <>        <Nav/>

        <div className='home'>
            <div className='main'>
                <Hero/>
                <Cared tt="Daily Flash Sale" sub="See bonus deals (18)"/>
                <Shopby/>
                <Cared tt="Featured Products" sub="See More"/>
                <Cared tt="Popular Combo Deals" sub="See More"/>
            </div>
            <div className='side'>
                <div className='hero-side-banner'>
                    <img src={panner}/>
                    <img src={panner}/>
                    <img src={panner}/>

                </div>
            </div>

        </div>

        </>

    );
};

export default home;