import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import FriendsList from '../components/Profile/FriendsList';
import FriendRequests from '../components/Profile/FriendRequests';
import Favorites from '../components/Profile/Favorites';
import CustomLists from '../components/Profile/CustomLists';
import EditProfile from '../components/Profile/EditProfile';
import './css/ProfilePage.css';

const ProfilePage = () => {
    const { authState, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProfile = async () => {
        try {
            const response = await api.get('/users/profile');
            setProfile(response.data.profile);
            setLoading(false);
        } catch (err) {
            console.error('Error al cargar el perfil');
            setError('Error al cargar el perfil');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (loading) return <p className="loading-text">Cargando perfil...</p>;

    return (
        <div className="profile-container">
            <div className="profile-overlay">
                <div className="profile-content">
                    <h2 className="profile-title">Mi Perfil</h2>
                    {error && <div className="error-message">{error}</div>}
                    {profile && (
                        <>
                            <EditProfile profile={profile} refreshProfile={fetchProfile} />
                            <Favorites />
                            <CustomLists />
                            <FriendsList />
                            <FriendRequests />
                            <div className="logout-section">
                                <button onClick={handleLogout} className="logout-button">
                                    Cerrar Sesión
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;