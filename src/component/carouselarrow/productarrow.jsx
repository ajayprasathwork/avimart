import React from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import './style.css'
const productarrow = (props) => {
   
    return (
        <>
                 <IoIosArrowBack className='p-prv'/>
                 <IoIosArrowForward className='p-next' onClick={()=>{props.slide('right')}}/>
        </>
    );
};

export default productarrow;