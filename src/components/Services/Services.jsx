import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faCogs, faTruck } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <section className="services-section">
            <h2>Els Nostres Serveis</h2>
            <div className="services-cards">

                <div className="service-card">
                    <FontAwesomeIcon icon={faUsers} className="service-icon" />
                    <h3>COMITÈ EMPRESARIAL</h3>
                    <p>Analitzem l'economia i creem sinergies estratègiques amb reunions periòdiques.</p>
                    <button>Coneix més</button>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                    <h3>TRANSFORMACIÓ CULTURAL I SUCCESSIÓ</h3>
                    <p>Fomentem lideratge humanista i continuïtat amb assessorament i borsa de treball.</p>
                    <button>Coneix més</button>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faCogs} className="service-icon" />
                    <h3>EFICIÈNCIA EN PROCESSOS</h3>
                    <p>Optimitzem processos industrials per millorar competitivitat i eficàcia.</p>
                    <button>Coneix més</button>
                </div>

                <div className="service-card">
                    <FontAwesomeIcon icon={faTruck} className="service-icon" />
                    <h3>SERVEI LOGÍSTIC</h3>
                    <p>Coordina distribució de mercaderies i gestió de repartidors amb CAP.</p>
                    <button>Coneix més</button>
                </div>
            </div>
            <button className="view-more-button">Ver més serveis</button>
        </section>
    );
};

export default Services;