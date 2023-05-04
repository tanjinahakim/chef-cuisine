import React from 'react';
import Header from '../shared/Header/Header';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;