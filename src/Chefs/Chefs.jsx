import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import './Chefs.css'

const Chefs = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))

    },[])
    return (
        <Container>
       <h2 className=' my-4 text-center chef-title'>Meet Our Chefs</h2>
      <Row>
        
        {
           
                chefs.map((chef)=>
                    <Col lg={4} key={chef.id}>
                        <ChefCard
                        
                chef={chef}>

                </ChefCard></Col>)
       } 
        
      </Row>
    </Container>      
    );
};

export default Chefs;