import React from 'react';
import './Services.css';
import { useIntersection } from '../../hooks/useIntersection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faCogs, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services = () => {
    const [servicesRef, isServicesVisible] = useIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    return (
        <section
            ref={servicesRef}
            className={`services-section fade-in-section ${isServicesVisible ? 'fade-in-active' : ''}`}
        >
            <h2>ELS NOSTRES SERVEIS</h2>

            <div className="services-cards">
                <Link
                    to="/Serveis-empresarials"
                    style={{ textDecoration: 'none' }}
                    className="service-card link-card"
                >
                    <FontAwesomeIcon icon={faUsers} className="service-icon" />
                    <h3>TRANSFORMACIÓ CULTURAL I SUCCESSIÓ</h3>
                    <p>Fomentem el lideratge humanista i la continuïtat amb assessorament i borsa de treball.</p>
                </Link>

                <Link
                    to="/Serveis-empresarials"
                    style={{ textDecoration: 'none' }}
                    className="service-card link-card"
                >
                    <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                    <h3>FORMACIÓ</h3>
                    <p>Facilitam la formació interna i l’adaptació empresarial als canvis compartint recursos.</p>
                </Link>

                <Link
                    to="/Serveis-empresarials"
                    style={{ textDecoration: 'none' }}
                    className="service-card link-card"
                >
                    <FontAwesomeIcon icon={faCogs} className="service-icon" />
                    <h3>PLURI-OCUPACIÓ</h3>
                    <p>Facilitam la pluri-ocupació i la coordinació horària per optimitzar l’ocupació laboral.</p>
                </Link>

                <Link
                    to="/Serveis-empresarials"
                    style={{ textDecoration: 'none' }}
                    className="service-card link-card"
                >
                    <FontAwesomeIcon icon={faTruck} className="service-icon" />
                    <h3>GESTIÓ DUAL</h3>
                    <p>L’afiliació impulsarà projectes de formació dual amb l’Acadèmia Algar per a contractes subvencionats.</p>
                </Link>
            </div>

            <Link to="/Serveis-empresarials" style={{ textDecoration: 'none' }}>
                <button className="view-more-button">Veure més serveis</button>
            </Link>
        </section>
    );
};

export default Services;