import React from 'react';
import { Link } from 'react-router-dom';
import './css/TripList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';

const TripList = ({ trips }) => {
    return (
        <div className="trip-list">
            {trips.map((trip) => (
                <div key={trip._id} className="trip-card">
                    <h3>{trip.title}</h3>
                    <p>{trip.description}</p>

                    <p className={`trip-public ${trip.public ? 'public' : 'private'}`}>
                        {trip.public ? (
                            <FontAwesomeIcon icon={faGlobe} title="Público" />
                        ) : (
                            <FontAwesomeIcon icon={faLock} title="Privado" />
                        )}
                    </p>

                    <div className="trip-image-container">
                        {trip.link ? (
                            <img
                                src={trip.link}
                                alt={`Imagen del itinerario ${trip.title}`}
                                className="trip-image"
                            />
                        ) : trip.imageUrl ? (
                            <img
                                src={trip.imageUrl}
                                alt={`Imagen del itinerario ${trip.title}`}
                                className="trip-image"
                            />
                        ) : (
                            <div className="no-image-placeholder">Sin imagen representativa... Prueba a añadir una imagen</div>
                        )}
                    </div>

                    <Link to={`/trips/${trip._id}`} className="btn-secondary">
                        Ver Itinerario
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TripList;