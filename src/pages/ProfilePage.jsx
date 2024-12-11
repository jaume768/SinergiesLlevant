import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
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
    const { userId } = useParams(); 
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const isOwnProfile = !userId || userId === authState.user._id;

    const fetchProfile = async () => {
        setLoading(true);
        try {
            if (isOwnProfile) {
                const response = await api.get('/users/profile');
                setProfile(response.data.profile);
            } else {
                const response = await api.get(`/users/${userId}/public-profile`);
                setProfile(response.data.profile);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error al cargar el perfil');
            setError('Error al cargar el perfil');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [userId]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (loading) return <p className="loading-text">Cargando perfil...</p>;

    if (error) return <div className="error-message">{error}</div>;

    if (!profile) return <div className="error-message">Perfil no encontrado.</div>;

    return (
        <div className="profile-container">
            <div className="profile-overlay">
                <div className="profile-content">
                    <h2 className="profile-title">{isOwnProfile ? 'Mi Perfil' : `Perfil de ${profile.username}`}</h2>
                    {isOwnProfile && (
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
                    {!isOwnProfile && (
                        <>
                            <p><strong>Username:</strong> {profile.username}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;