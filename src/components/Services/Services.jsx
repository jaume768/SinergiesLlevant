import React from 'react';
import './Services.css';
import { useIntersection } from '../../hooks/useIntersection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faCogs, faTruck } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const [servicesRef, isServicesVisible] = useIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });
    return (
        <section ref={servicesRef} className={`services-section fade-in-section ${isServicesVisible ? 'fade-in-active' : ''}`}>
            <h2>Els Nostres Serveis</h2>
            <div className="services-cards">

                <div className="service-card">
                    <FontAwesomeIcon icon={faUsers} className="service-icon" />
                    <h3>COMITÈ EMPRESARIAL</h3>
                    <p>Analitzem l'economia i creem sinergies estratègiques amb reunions periòdiques.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                    <h3>TRANSFORMACIÓ CULTURAL I SUCCESSIÓ</h3>
                    <p>Fomentem lideratge humanista i continuïtat amb assessorament i borsa de treball.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faCogs} className="service-icon" />
                    <h3>EFICIÈNCIA EN PROCESSOS</h3>
                    <p>Optimitzem processos industrials per millorar competitivitat i eficàcia.</p>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faTruck} className="service-icon" />
                    <h3>SERVEI LOGÍSTIC</h3>
                    <p>Coordina distribució de mercaderies i gestió de repartidors amb CAP.</p>
                </div>
            </div>
            <button className="view-more-button">Veure més serveis</button>
        </section>
    );
};

export default Services;