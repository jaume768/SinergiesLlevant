import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Objectius from '../components/Objectius/Objectius';
import Services from '../components/Services/Services';
import MisionVision from '../components/MisionYVision/MisionVision';
import Avantatges from '../components/Avantatges/Avantatges';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <MisionVision />
            <Objectius />
            <Avantatges />
        </>
    );
};

export default Home;