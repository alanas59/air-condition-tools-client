import React from 'react';
import Address from './Address';
import Banner from './Banner';
import Business from './Business';
import Products from './Products';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <Business></Business>
            <Reviews></Reviews>
            <Address></Address>
        </div>
    );
};

export default Home;