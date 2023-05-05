import React from 'react';
import Header from '../shared/Header/Header';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <About></About>
            <Feature></Feature>
        </div>
    );
};

export default Home;