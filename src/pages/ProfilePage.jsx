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
    const [isFriend, setIsFriend] = useState(false);
    const [friendRequestSent, setFriendRequestSent] = useState(false);

    const isOwnProfile = !userId || userId === authState.user._id;

    const fetchProfile = async () => {
        setLoading(true);
        try {
            if (isOwnProfile) {
                const response = await api.get('/users/profile');
                setProfile(response.data.profile);
            } else {
                const response = await api.get(`/users/${userId}/public-profile`);
                const { profile, isFriend, hasSentRequest } = response.data;
                setProfile(profile);
                setIsFriend(isFriend);
                setFriendRequestSent(hasSentRequest);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error al cargar el perfil', err);
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

    const sendFriendRequest = async () => {
        try {
            await api.post('/users/add-friend', { friendId: userId });
            setFriendRequestSent(true);
            alert('Solicitud de amistad enviada');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Error al enviar la solicitud de amistad');
        }
    };

    const cancelFriendRequest = async () => {
        try {
            await api.post('/users/cancel-friend-request', { friendId: userId });
            setFriendRequestSent(false);
            alert('Solicitud de amistad cancelada');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Error al cancelar la solicitud de amistad');
        }
    };

    if (loading) return <p className="loading-text">Cargando perfil...</p>;

    if (error) return <div className="error-message">{error}</div>;

    if (!profile) return <div className="error-message">Perfil no encontrado.</div>;

    return (
        <div className="profile-container">
            <div className="profile-overlay">
                <div className="profile-content">
                    <div className="profile-header">
                        <img 
                            src={profile.profilePicture || 'https://via.placeholder.com/150'} 
                            alt={`${profile.username} Avatar`} 
                            className="profile-picture" 
                        />
                        <div className="profile-info">
                            <h2 className="profile-title">{isOwnProfile ? 'Mi Perfil' : profile.username}</h2>
                            {!isOwnProfile && (
                                <div className="profile-actions">
                                    {!isFriend && !friendRequestSent && (
                                        <button 
                                            className="add-friend-button" 
                                            onClick={sendFriendRequest} 
                                            aria-label="Agregar Amigo"
                                        >
                                            <i className="fas fa-user-plus"></i> Agregar Amigo
                                        </button>
                                    )}
                                    {!isFriend && friendRequestSent && (
                                        <button 
                                            className="cancel-friend-request-button" 
                                            onClick={cancelFriendRequest} 
                                            aria-label="Cancelar Solicitud de Amistad"
                                        >
                                            <i className="fas fa-times"></i> Cancelar Solicitud
                                        </button>
                                    )}
                                    {isFriend && (
                                        <button 
                                            className="unfriend-button" 
                                            aria-label="Eliminar Amigo"
                                        >
                                            <i className="fas fa-user-minus"></i> Eliminar Amigo
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
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
                        <div className="public-profile-details">
                            <p><strong>Email:</strong> {profile.email}</p>
                            {profile.bio && <p><strong>Biografía:</strong> {profile.bio}</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
