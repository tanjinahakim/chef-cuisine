import React from 'react';
import Header from '../shared/Header/Header';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <About></About>
        </div>
    );
};

export default Home;