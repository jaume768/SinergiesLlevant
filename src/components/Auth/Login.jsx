import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './css/Auth.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (errMsg) {
            setError(errMsg);
        }
    };

    return (
        <div className="auth-container">
            <header className="auth-header">
                <div className="auth-overlay">
                    <div className="auth-form-container">
                        <h2 className="auth-title">Iniciar Sesión</h2>
                        {error && <div className="error-message">{error}</div>}
                        <form onSubmit={onSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                    placeholder="Ingresa tu email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>
                            <p className="register-prompt">
                                ¿No tienes una cuenta?{' '}
                                <Link to="/register" className="register-link">
                                    Regístrate aquí
                                </Link>
                            </p>
                            <button type="submit" className="auth-button">
                                Iniciar Sesión
                            </button>
                            <button
                                type="button"
                                onClick={() => window.location.href = 'https://api-aiwonderway-production.up.railway.app/api/auth/google'}
                                className="google-button"
                            >
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>

                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Login;