import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import TripList from '../components/Trips/TripList';
import Pagination from '../components/Trips/Pagination';
import { Link } from 'react-router-dom';
import './css/Dashboard.css';

const Dashboard = () => {
    const [trips, setTrips] = useState([]);
    const [filteredTrips, setFilteredTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const tripsPerPage = 6;

    const fetchTrips = async () => {
        try {
            const response = await api.get('/trips/user');
            const sortedTrips = response.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setTrips(sortedTrips);
            setFilteredTrips(sortedTrips);
            setLoading(false);
        } catch (err) {
            setError('Error al cargar los viajes');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredTrips(trips);
        } else {
            const lowerCaseQuery = searchQuery.toLowerCase();
            const filtered = trips.filter(trip =>
                trip.title.toLowerCase().includes(lowerCaseQuery) ||
                trip.description.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredTrips(filtered);
        }
        setCurrentPage(1);
    }, [searchQuery, trips]);

    const indexOfLastTrip = currentPage * tripsPerPage;
    const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
    const currentTrips = filteredTrips.slice(indexOfFirstTrip, indexOfLastTrip);

    const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-overlay">
                <div className="dashboard-content">
                    <h2 className="dashboard-title">Mis Itinerarios de Viaje</h2>
                    <Link to="/trips/create" className="dashboard-button">
                        Crear Nuevo Itinerario
                    </Link>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar itinerarios..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    {loading ? (
                        <p className="loading-text">Cargando...</p>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : filteredTrips.length === 0 ? (
                        <p className="no-trips-text">No se encontraron itinerarios.</p>
                    ) : (
                        <>
                            <TripList trips={currentTrips} />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                paginate={paginate}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;