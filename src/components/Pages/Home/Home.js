import React from 'react';
import Banner from './Banner/Banner';
import Coundown from './Coundown/Coundown';
import Footer from './Footer/Footer';
import Team from './Team/Team';

const Home = () => {
    return (
        <>
           <Banner/>
           <Team/>
           <Coundown/>          
        </>
    );
};

export default Home;