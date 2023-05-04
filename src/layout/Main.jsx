import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div style={{background:"#fffff"}}>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;