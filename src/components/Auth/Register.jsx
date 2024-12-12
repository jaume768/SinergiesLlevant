import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './css/Auth.css';

const Register = () => {
    const { register } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const { username, email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(username, email, password);
            setSuccessMsg('Registro exitoso. Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        } catch (errMsg) {
            setError(errMsg);
        }
    };

    return (
        <div className="auth-container">
            <header className="auth-header">
                <div className="auth-overlay">
                    <div className="auth-form-container">
                        <h2 className="auth-title">Registrarse</h2>
                        {error && <div className="error-message">{error}</div>}
                        {successMsg && <div className="success-message">{successMsg}</div>}
                        {!successMsg && (
                            <form onSubmit={onSubmit} className="auth-form">
                                <div className="form-group">
                                    <label htmlFor="username">Nombre de Usuario</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={onChange}
                                        required
                                        placeholder="Ingresa tu nombre de usuario"
                                    />
                                </div>
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
                                <button type="submit" className="auth-button">
                                    Registrarse
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Register;