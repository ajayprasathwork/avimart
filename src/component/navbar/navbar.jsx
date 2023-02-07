import React from 'react';
import './navbar.css'
import Logo from '../../img/logo.png'
import { AiOutlineDown,AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
                        <HiOutlineLocationMarker/>
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

                </div>

            </div>
            <div className='nav-link'></div>

        </div>
    );
};

export default navbar;