import React from 'react';
import './navbar.css'
import Logo from '../../img/logo.png'
import { AiOutlineDown,AiOutlineSearch,AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker,HiOutlineMenuAlt2 } from "react-icons/hi";

const navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-header'>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    <p>Avimart</p>
                </div>
                <div className='search'>
                    <div className='findstores'>
                        <HiOutlineLocationMarker className='icon'/>
                      <p>Find Stores</p>
                      <AiOutlineDown/>
                    </div>
                    <div className='search-continer'>
                        <div className='categories'><p>All Categories</p><AiOutlineDown/></div>
                        <input className='search-input' type={"text"} placeholder="What are you looking for today?"></input>
                        <div className='search-icon'>
                            <AiOutlineSearch/>
                        </div>
                    </div>
                </div>
                <div className='headicon'>
                    <div className='headicon-box'>
                        <AiOutlineUser className='icon'/>
                      <p>Account</p>
                    </div>
                    <div className='headicon-box'>
                        <AiOutlineHeart className='icon'/>
                      <p>Wishlist</p>
                    </div>
                    <div className='headicon-box'>
                        <AiOutlineShoppingCart className='icon'/>
                      <p>Cart</p>
                    </div>

                </div>

            </div>
            <div className='nav-link'>
                <div className='nav-link-part1'>
                    <a><HiOutlineMenuAlt2 className='icon'/></a>
                    <a>Home</a>
                    <a>Top Deals</a>
                    <a>Hot Offers</a>
                    <a>New arrivals</a>
                    <a>Blog</a>
                    <a>Gift Cards</a>

                </div>
                <div className='nav-link-part2'>
                 <a>Recently Viewed<AiOutlineDown className='icon'/></a>
                 <a>Order Tracking<AiOutlineDown className='icon'/></a>
                 <a>USD $<AiOutlineDown className='icon'/></a>
                 <a>Hotline: +01 1234 8888</a>

                </div>

            </div>

        </div>
    );
};

export default navbar;