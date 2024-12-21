import React, { useEffect, useState, useCallback } from 'react';
import api from '../utils/api';
import { useParams } from 'react-router-dom';
import TripList from '../components/Trips/TripList';
import './css/TripPage.css';

const TripPage = () => {
    const { friendId } = useParams();
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchFriendTrips = useCallback(async () => {
        try {
            const response = await api.get(`/users/${friendId}/trips`);
            console.log('API response:', response.data); // Para depuración
            if (Array.isArray(response.data)) {
                setTrips(response.data);
            } else {
                setTrips([]);
                setError('Respuesta inesperada del servidor');
                console.error('Datos de respuesta inesperados:', response.data);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error al obtener los itinerarios:', err);
            if (err.response && err.response.data && err.response.data.msg) {
                setError(err.response.data.msg);
            } else {
                setError('Error al cargar los itinerarios del amigo');
            }
            setLoading(false);
        }
    }, [friendId]);

    useEffect(() => {
        if (friendId) {
            fetchFriendTrips();
        } else {
            setError('ID de amigo no proporcionado');
            setLoading(false);
        }
    }, [fetchFriendTrips, friendId]);

    if (loading) return <p>Cargando itinerarios...</p>;
    if (error) return <div className="error-message">{error}</div>;
    if (!Array.isArray(trips)) return <div className="error-message">Datos de itinerarios inválidos.</div>;
    if (trips.length === 0) return <p>Este usuario no tiene itinerarios públicos o no eres amigo.</p>;

    return (
        <div className="friend-trips">
            <h2>Itinerarios de tu Amigo</h2>
            <TripList trips={trips} />
        </div>
    );
};

export default TripPage;