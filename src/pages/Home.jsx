import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Objectius from '../components/Objectius/Objectius';
import Services from '../components/Services/Services';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Objectius />
        </>
    );
};

export default Home;