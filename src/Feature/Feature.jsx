import React from 'react';
import { Image } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import img1 from '../assets/icon/download.png'
import img2 from '../assets/icon/download1.png'
import img3 from '../assets/icon/images.png'
const Feature = () => {
    return (
        <div className='container  mt-5 text-center'> 
             <h2 className='py-5'>Our Awesome Services</h2>
            <Marquee>
                <Image src={img1} style={{height:"100px",width:"100px"}}  />
                <h5 className='px-3'>Super Tasty Foods</h5>
                <Image src={img2} style={{height:"100px",width:"100px"}}  />
                <h5 className='px-3'>Quality Food, Keep healthy food readily available</h5>
                <Image src={img3} style={{height:"100px",width:"100px"}}  />
                <h5 className='px-3'>Fast and Safe Delivery</h5>
            </Marquee>
            <div>
                
            </div>
        </div>
    );
};

export default Feature;