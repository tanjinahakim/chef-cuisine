import React from 'react';
import { Button, Image } from 'react-bootstrap';
import {  FaHamburger, FaHistory, FaHotjar, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ChefCard.css';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({chef}) => {
    const{name,experience,recipes,likes,img,id}=chef;
    return (
        
        <div className=" card mb-3 my-4 shadow  chef  " >
            <div className='d-flex justify-content-center align-items-center view'>
                <div>
                <LazyLoad>  
                <Image variant="top" src={img} style={{height:"100px",width:"100px"}} className=' m-3 ' roundedCircle />
                </LazyLoad>
                </div>
                <div className='p-4 mb-4 '>
                    <div >
                        <p className='fw-bold  '>{name}</p>
                        <div  >
                        <p style={{lineHeight:"1em"}}><FaHistory></FaHistory> {experience} year of experience </p>
                        <p style={{lineHeight:"1em"}}><FaHamburger></FaHamburger> {recipes} recipes</p>
                        <p  style={{lineHeight:"1em"}}> <FaThumbsUp></FaThumbsUp> {likes}</p>
                        </div>
                    </div>
                    <Link to={`/chefRecipies/${id}`}><Button variant="outline-primary" size="sm" className='z-0 position-absolute fw-semibold '><FaHotjar></FaHotjar> View Recipes</Button></Link>
                     
                </div>
                

            </div>
         </div>
    );
};

export default ChefCard;