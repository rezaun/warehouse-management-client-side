import React from 'react';
import Banner from './Banner/Banner';
import Coundown from './Coundown/Coundown';
import Products from './Products/Products';
import Team from './Team/Team';

const Home = () => {
    return (
        <>            
            <Banner/>           
            <Products/>
            <Team/>
            <Coundown/>          
        </>
    );
};

export default Home;