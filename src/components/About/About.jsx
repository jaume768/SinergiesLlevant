import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/personas.jpg" alt="Personas" />
                </div>
                <div className="about-text">
                    <h2>Qui som?</h2>
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
