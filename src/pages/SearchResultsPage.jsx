import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../utils/api';
import './css/SearchResultsPage.css'; // Importa el CSS

const SearchResultsPage = () => {
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q') || '';
        setQuery(q);
    }, [location]);

    useEffect(() => {
        if (query.trim() !== '') {
            const fetchResults = async () => {
                setLoading(true);
                try {
                    const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
                    setResults(response.data);
                } catch (error) {
                    console.error('Error al buscar:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchResults();
        } else {
            setResults([]);
            setLoading(false);
        }
    }, [query]);

    return (
        <div className="search-container">
            <div className="search-overlay">
                <div className="search-content">
                    {loading ? (
                        <p className="loading-text">Cargando resultados...</p>
                    ) : (
                        <>
                            <h1 className="search-title">Resultados de búsqueda para: {query}</h1>
                            {results.length === 0 ? (
                                <p className="no-results-text">No se encontraron resultados.</p>
                            ) : (
                                <ul className="search-results-list">
                                    {results.map((trip) => (
                                        <li key={trip._id} className="search-result-item">
                                            <h3 className="result-title">{trip.title}</h3>
                                            <p className="result-description">{trip.description}</p>
                                            {trip.createdBy && <p className="result-author">Creado por: {trip.createdBy.username}</p>}
                                            <a href={`/trips/${trip._id}`} className="result-link">Ver Itinerario</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;