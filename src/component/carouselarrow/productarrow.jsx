import React from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import './style.css'
const productarrow = () => {
    return (
        <>
                 <IoIosArrowBack className='p-prv'/>
                 <IoIosArrowForward className='p-next'/>
        </>
    );
};

export default productarrow;