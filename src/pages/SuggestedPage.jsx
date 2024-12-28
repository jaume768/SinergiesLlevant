import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import TripList from '../components/Trips/TripList';
import './css/SuggestedPage.css';

const SuggestedPage = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPopularTrips = async () => {
        try {
            const response = await api.get('/trips/popular');
            setTrips(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error al cargar los itinerarios sugeridos');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularTrips();
    }, []);

    return (
        <div className="suggested-container">
            <div className="suggested-overlay">
                <div className="suggested-content">
                    <h2 className="suggested-title">Itinerarios Sugeridos</h2>
                    {loading ? (
                        <p className="loading-text">Cargando...</p>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : trips.length === 0 ? (
                        <p className="no-trips-text">No hay itinerarios sugeridos en este momento.</p>
                    ) : (
                        <TripList trips={trips} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SuggestedPage;