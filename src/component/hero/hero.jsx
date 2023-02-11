import React from 'react';
import './hero.css'
import panner from '../../img/paneer1.webp'
import  {  Carousel  } from 'antd';

const hero = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        width:"100%",
      };
    return (
        <div className='hero'>
           <Carousel autoplay>
           <img style={contentStyle} src={panner}/>
           <img style={contentStyle} src={panner}/>
           <img style={contentStyle} src={panner}/>
           </Carousel>
    </div>
    );
};

export default hero;