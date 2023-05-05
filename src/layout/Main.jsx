import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    const navigation = useNavigation
    return (
        <div style={{background:"#fffff"}}>
            <Header></Header>
            <div>
                {navigation.state === 'loading'?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:''}
            </div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;