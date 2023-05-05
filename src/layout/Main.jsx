import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div style={{background:"#fffff"}}>
            
            
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;