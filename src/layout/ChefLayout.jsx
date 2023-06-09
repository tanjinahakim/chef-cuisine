import React, { useState } from 'react';
import Header from '../shared/Header/Header';
import { Outlet, useLoaderData ,useNavigation} from 'react-router-dom';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import {  FaHamburger, FaHeart, FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import { BsBook } from "react-icons/bs";
import "./ChefLayout.css"
import { Rating } from '@smastrom/react-rating'
import Footer from '../shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'

const ChefLayout = () => {
    const navigation = useNavigation();
    const chefs = useLoaderData();
    {navigation.state === 'loading'?'loading':''
                
}
    console.log(navigation);
    const {img,name,bio,experience,likes,recipes,recipe}=chefs;
    const handleDisable=(event)=>{
        toast("Added To Favourite");
        
        event.currentTarget.disabled = true;
        
    }
    
    return (
        <div>
           
            <Header></Header>
            <div className='p-5 banner' >
                <Row>
                    <Col lg={8}>
                    <div className=' p-5 m-5 bio'>
                    <h2>{name}</h2>
                    <p >{bio}</p>
                    <div className='d-flex align-items-center '>
                     <h6 className='fs-6 d-flex justify-content-center align-items-center '><FaStar style={{fontSize:"1em",marginRight:"4px"}}></FaStar>{experience} year of Experience </h6>
                     <h6 className='px-4 fs-6 d-flex justify-content-center align-items-center'><FaHamburger style={{fontSize:"1em",marginRight:"4px"}}></FaHamburger>{recipes} recipes</h6> 
                     <h6 className='px-4 fs-6 d-flex justify-content-center align-items-center'><FaThumbsUp style={{fontSize:"1em",marginRight:"4px"}}></FaThumbsUp>{likes} Likes</h6>                                         
                    </div>
                </div>
                    </Col>
                    <Col lg={4}>
                    <Image  src={img} roundedCircle style={{width:"auto",height:"50vh"}} className='my-5 img'></Image>
                    </Col>
                </Row>
            </div>
            <Container className='my-5 recipes'>
                        <Row>
                                {
                                    recipe.map(r=>(
                                        <Col lg={6} key={r.food_id} className='my-5'>
                                        <Card >
                                        <Card.Img variant="top" src={r.food_url} style={{objectFit: "cover",height:"15vw"}} />
                                        <Card.Header as="h5">{r.name}</Card.Header>
                                        <Card.Body >
                                        
                                        <Button variant="outline-dark" className='border-0 btn fw-semibold' ><BsBook style={{color:"gray",marginRight:"4px"}}></BsBook>  Ingredients</Button>
                                           <ul>
                                           {     
                                                        r.ingredients.map((e,i)=>(
                                                        <li key={i} style={{lineHeight:"1em"}}>{e}</li>
                                                        ))    
                                            }
                                           </ul>
                                        <hr />
                                        <Button variant="outline-dark" className='border-0 btn fw-semibold' ><BsBook style={{color:"gray",marginRight:"4px"}}></BsBook>  Description</Button>
                                           <Card.Text>{r.method}</Card.Text>
                                        
                                        </Card.Body>
                                        
                                        <Card.Footer className="text-muted">
                                        <div className='d-flex'>
                                        <div className='flex-grow-1 d-flex'>
                                        <Rating style={{ maxWidth: 100 }} value={r.rating} readOnly/>
                                        
                                            <span className='ms-2 mt-4'>{r.rating}</span>
                                        </div>
                                            <div>
                                                <Button size='sm' onClick={handleDisable}>Favourite</Button>
                                                <ToastContainer/>
                                            </div>


                                        </div>
                                            
                                        </Card.Footer>
                                    </Card>
                                    </Col>
                                    )) 
                                }
                                
                                
                            
                            
                        </Row>
                                           
                    </Container>   
                    <Outlet></Outlet>      
                    <Footer></Footer>

        </div>
    );
};

export default ChefLayout;