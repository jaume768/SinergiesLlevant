import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import api, { uploadProfilePicture } from '../utils/api';
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
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

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

    // Funciones para manejar la subida de la foto de perfil
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                setUploadError('Solo se permiten imágenes JPG, PNG y GIF.');
                return;
            }

            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                setUploadError('La imagen excede el tamaño máximo de 5MB.');
                return;
            }

            setImageFile(file);
            setUploadError('');

            // Crear una URL para la previsualización
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUploadImage = async () => {
        if (!imageFile) {
            setUploadError('Por favor, selecciona una imagen primero.');
            return;
        }

        setUploading(true);
        setUploadError('');

        try {
            const token = authState.token; // Asegúrate de que el token esté disponible
            const response = await uploadProfilePicture(imageFile, token);
            setProfile((prevProfile) => ({
                ...prevProfile,
                profilePicture: response.data.profilePicture,
            }));
            setImageFile(null);
            setPreviewImage(null);
            alert('Foto de perfil subida exitosamente');
        } catch (err) {
            console.error(err);
            setUploadError(err.response?.data?.msg || 'Error al subir la imagen');
        } finally {
            setUploading(false);
        }
    };

    const handleUnfriend = async () => {
        alert('Función para eliminar amigos aún no implementada.');
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
                            src={profile.profilePicture?.url || 'https://via.placeholder.com/150'} 
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
                                            onClick={handleUnfriend}
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
                            {/* Sección para subir la foto de perfil */}
                            <div className="profile-upload-section">
                                <button 
                                    className="dashboard-button btn-upload-photo" 
                                    onClick={() => document.getElementById('profileImageInput').click()}
                                >
                                    {profile.profilePicture?.url ? 'Cambiar Foto' : 'Añadir Foto'}
                                </button>

                                {/* Input oculto para seleccionar la imagen */}
                                <input
                                    type="file"
                                    id="profileImageInput"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />

                                {/* Previsualización de la imagen seleccionada */}
                                {previewImage && (
                                    <div className="image-preview">
                                        <img src={previewImage} alt="Previsualización" className="itinerary-image-preview" />
                                    </div>
                                )}

                                {/* Botones para subir o cancelar */}
                                {imageFile && (
                                    <div className="upload-controls">
                                        <button className="dashboard-button btn-upload" onClick={handleUploadImage} disabled={uploading}>
                                            {uploading ? 'Subiendo...' : 'Subir Imagen'}
                                        </button>
                                        <button className="dashboard-button btn-cancel" onClick={() => { setImageFile(null); setPreviewImage(null); }} disabled={uploading}>
                                            Cancelar
                                        </button>
                                        {uploadError && <p className="error-message">{uploadError}</p>}
                                    </div>
                                )}
                            </div>

                            {/* Otros componentes del perfil */}
                            <EditProfile profile={profile} refreshProfile={fetchProfile} />
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