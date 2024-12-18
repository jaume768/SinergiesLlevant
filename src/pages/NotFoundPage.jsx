import React from 'react';
import { Link } from 'react-router-dom';
import './css/NotFoundPage.css'; // Asegúrate de crear este archivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <FontAwesomeIcon icon={faExclamationTriangle} className="notfound-icon" />
                <h1>404</h1>
                <h2>Página No Encontrada</h2>
                <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
                <Link to="/" className="notfound-button">
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;