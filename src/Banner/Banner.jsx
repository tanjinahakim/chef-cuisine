import React from 'react';
import { Image } from 'react-bootstrap';
import './Banner.css'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className='banner ' style={{lineHeight:'.1em'}}>
        <div className='p-5 container '>
        <h1 className='text-center fw-bold text-light ' >Welcome  Back to <span style={{color:"#eb4d4b"}}>Chef Cuisines</span> </h1>
        <h4 className='text-center  text-light'>Enjoy Your <span style={{color:"#badc58",fontSize:"30px"}}>Healthy</span> Delicious Food</h4>
        </div>
        
        </div>
    );
};

export default Banner;