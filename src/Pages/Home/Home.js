import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
        </div>
    );
};

export default Home;