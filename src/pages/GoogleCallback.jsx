import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const GoogleCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (token) {
            localStorage.setItem('token', token);
            window.location.href = '/dashboard'; // o puedes usar navigate('/dashboard')
        } else {
            // Si no hay token, quizás redirigir a login
            navigate('/login');
        }
    }, [location.search, navigate]);

    return <div>Procesando...</div>;
};

export default GoogleCallback;