import React from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import './style.css'
const productarrow = (props) => {
   
    return (
        <>
                 <IoIosArrowBack className='p-prv' onClick={()=>{props.slide('left')}}/>
                 <IoIosArrowForward className='p-next' onClick={()=>{props.slide('right')}}/>
        </>
    );
};

export default productarrow;