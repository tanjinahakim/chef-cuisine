import React, { useContext} from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigation } from 'react-router-dom';
import { Avatar, Tooltip } from '@mui/material';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
                <Container>
                    <Navbar.Brand href="#home">Chef Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto nav  ">
                        
                        <ActiveLink to="/home" >Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        <ActiveLink to="/about">About</ActiveLink>
                        
                        
                    </Nav>
                    <Nav >
                        { user && 
                            <Tooltip title={user.displayName} >
                                <Avatar className='me-3' src={user.photoURL}></Avatar>
                            </Tooltip>
                        
                        }
                       
                        
                        { user?
                         <Button className='button' onClick={handleLogOut} variant="secondary ">LogOut</Button>
                         :<Link to={'/login'}><Button className='button' variant="secondary ">Login</Button></Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </div>
    );
};

export default Header;