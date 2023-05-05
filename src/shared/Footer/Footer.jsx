import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaSearch, FaSnapchatGhost, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{background:"#dfe6e9"}} className='mt-5'>
            <Row>
                <Col lg={4}>
                <div className=' p-5'>
                <h3 className='text-justify ps-4'>Let's connect with us</h3>
                <div className='d-flex'>
                <FaFacebook style={{fontSize:"5em",padding:"18px"}}></FaFacebook>
                <FaInstagram style={{fontSize:"5em",padding:"18px"}}></FaInstagram>
                <FaTwitter style={{fontSize:"5em",padding:"18px"}}></FaTwitter>
                <FaSnapchatGhost style={{fontSize:"5em",padding:"18px"}}></FaSnapchatGhost>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className=' p-5'>
                <h3 className='text-justify ps-4'> Contact</h3>
                <p>555 4th 5t NW, Birmingham <br/>
                DC 20530, United Kingdom</p>
                <p>+88 01750 000 000 <br/>
                +88 01750 000 000</p>
                <p>info@gmail.com <br/>
                info@gmail.com</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className=' p-5'>
                <h3 className='text-justify ps-4'>Subscribe</h3>
                <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                <div className='d-flex'>
                <div class="input-group rounded w-50">
                    <input type="search" className="form-control rounded shadow-lg w-50 mb-1" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="submit" class="btn btn-danger px-4 mx-4 rounded btn-sm">Search</button>
                </div>
            </div>
                </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default Footer;