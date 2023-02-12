import React from 'react';
import './home.css'
import Nav from '../component/navbar/navbar.jsx'
import Hero from '../component/hero/hero.jsx';
import Cared from '../component/categories/categories.jsx'
import Pcard from '../component/continers/product'
import Shopby from '../component/continers/shopby.jsx'
import panner from '../img/Banner.png';
import Sidecard from '../component/cards/sidecard';
import sideimg from '../img/sales.png'
import ben from '../img/ben.png'

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
                <Sidecard/>
                <img src={sideimg}/>
                <img src={ben}/>

            </div>

        </div>
        <div className='addbar'>
            <p>Safe, convenient shopping from home.</p>
            <p>Free shipping on all orders over $75</p>
        </div>
        <div className='home'>
            <div className='main'>
                
                <Cared tt="Popular Combo Deals" sub="See More"/>
            </div>
            <div className='side down'>
                
                <Sidecard/>
            </div>

        </div>

        </>

    );
};

export default home;