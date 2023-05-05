import React from 'react';
import "./About.css";
import pic from "../assets/about/pic3.jpg"
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-5 shadow'>
            <Row className='container  text-center'>
            
            <Col lg={6} className='my-5'>
                <Image src={pic} roundedCircle className='shadow' style={{height:"50vh",width:"50vh"}}/>
            </Col>
            <Col lg={6} className='my-5'>
                <h5>About Us</h5>
                <h3>Easiest Way of Eating Food</h3>
                <p>Healthy food is food that gives you all the nutrients you need to stay healthy, feel well and have plenty of energy. The best way to ensure you're eating healthily is to eat a wide variety of different kinds of food.</p>
                <Link to={'/about'}><Button variant='outline-secondary' className='mx-5'>Read More</Button></Link>
            </Col>
            
            </Row>
        </div>
    );
};

export default About;