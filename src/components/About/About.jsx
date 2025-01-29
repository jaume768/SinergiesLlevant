import React from 'react';
import './About.css';
import { useIntersection } from '../../hooks/useIntersection';

const About = () => {
    const [sectionRef, isVisible] = useIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    return (
        <section ref={sectionRef} className={`about-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}>
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/personas.webp" alt="Personas" />
                </div>
                <div className="about-text">
                    <h2>QUI SOM?</h2>
                    <p>
                        Som una empresa dedicada a promoure la col·laboració la col·laboració entre <b>PIMES</b>,
                        mitjançant un model d’afiliació que proporciona accés a serveis i recursos compartits.
                        L’objectiu del projecte és extrapolar la cultura d’empresa de <b>CÀRNIQUES SUNYER</b>,
                        basada en la cooperació i en un sistema horitzontal i flexible, que assigna responsabilitats
                        i rols de manera àgil, destacant la importància de la cultura empresarial.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
