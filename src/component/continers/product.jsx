import React,{useRef,useEffect} from 'react';
import Arrow from '../carouselarrow/productarrow.jsx'
import Pcard from '../cards/productcard.jsx'
import './product.css'
const Product = (props) => {
    const containerRef = useRef(); // <-- (1) create Ref
    const sliderTimerRef = useRef();

    useEffect(() => {
        return () => {
          // clear any running intervals on component unmount
          clearInterval(sliderTimerRef.current);
        };
      }, []);

      function slide(direction) {
        // clear any previously set intervals and reset scrollCompleted
        clearInterval(sliderTimerRef.current);
        let scrollCompleted = 0;
      
        sliderTimerRef.current = setInterval(function() {
          const container = containerRef.current; // <-- (3) access current ref value
      
          if (direction === 'left') {
            container.scrollLeft -= 10; // <-- (4)  Optional Chaining null check
          } else {
            container.scrollLeft += 50; // <-- (4)  Optional Chaining null check
          }
          scrollCompleted += 10;
          if (scrollCompleted >= 100) {
            clearInterval(sliderTimerRef.current);
          }
        }, 50);
      }
      
      
    return (
             <div className='pc'>
                <div className='pc-head'>
                    <div className='titel'><p>{props.titel}<span>{props.sub}</span></p></div>
                    <div className='other-links'></div>

                </div>
                <div className='pci-continer'  ref={containerRef} >
                    {/* <div className='pci-continer-item'> */}
                      <Pcard id="1"/>
                      <Pcard id="2"/>
                      <Pcard id="1"/>
                      <Pcard id="2"/><Pcard id="1"/>
                      <Pcard id="2"/><Pcard id="1"/>
                      <Pcard id="2"/><Pcard id="1"/>
                      <Pcard id="2"/><Pcard id="1"/>
                      <Pcard id="2"/>
                      <Pcard id="2"/><Pcard id="1"/>
                      <Pcard id="6"/>
                    {/* </div> */}<Arrow slide={()=>{slide()}}/>
                    
                </div>
               
             </div>
    );
};

export default Product;