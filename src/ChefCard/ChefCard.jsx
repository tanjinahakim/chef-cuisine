import React from 'react';
import { Button, Image } from 'react-bootstrap';
import {  FaHamburger, FaHistory, FaHotjar, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ChefCard.css';

const ChefCard = ({chef}) => {
    const{name,experience,recipes,likes,img,id}=chef;
    return (
        
        <div className=" card mb-3 mt-4 shadow  chef  " style={{height:"40vh",border:"#f1f2f6",background:"rgba(199, 209, 209, 0.096)"}} >
            <div className='d-flex justify-content-center align-items-center '>
                <div>
                <Image variant="top" src={img} style={{height:"80px",width:"80px"}} className=' m-3 ' roundedCircle />
                </div>
                <div className='p-4 mb-4 '>
                    <div >
                        <p className='fw-bold fs-5  '>{name}</p>
                        <div  style={{lineHeight:"1em"}} >
                        <p ><FaHistory></FaHistory> {experience} year of experience </p>
                        <p><FaHamburger></FaHamburger> {recipes} recipes</p>
                        <p className='flex-grow' > <FaThumbsUp></FaThumbsUp> {likes}</p>
                        </div>
                    </div>
                     <Link to={`/chefRecipies/${id}`}><Button variant="outline-primary" size="sm" className='z-0 position-absolute fw-semibold'><FaHotjar></FaHotjar> View Recipes</Button></Link>
                </div>
                

            </div>
         </div>
    );
};

export default ChefCard;