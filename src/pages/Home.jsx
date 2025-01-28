// Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Objectius from '../components/Objectius/Objectius';
import Services from '../components/Services/Services';
import MisionVision from '../components/MisionYVision/MisionVision';
import Avantatges from '../components/Avantatges/Avantatges';
import Contact from '../components/Contact/Contact';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="mision-vision">
                <MisionVision />
            </section>
            <section id="objectius">
                <Objectius />
            </section>
            <section id="avantatges">
                <Avantatges />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
};

export default Home;