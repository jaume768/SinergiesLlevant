import React, { useEffect, useState, useContext } from 'react';
import api, { uploadTripImage } from '../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';
import EditTrip from './EditTrip';
import { Link } from 'react-router-dom';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { AuthContext } from '../../context/AuthContext';
import './css/TripDetail.css';

const TripDetail = () => {
    const { tripId } = useParams();
    const navigate = useNavigate();
    const { authState } = useContext(AuthContext);
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showEdit, setShowEdit] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

    const fetchTrip = async () => {
        try {
            const response = await api.get(`/trips/${tripId}`);
            console.log(response.data);
            setTrip(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.msg || 'Error al cargar el itinerario');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrip();
    }, [tripId]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                setUploadError('Solo se permiten imágenes JPG, PNG y GIF.');
                return;
            }

            const maxSize = 5 * 1024 * 1024;
            if (file.size > maxSize) {
                setUploadError('La imagen excede el tamaño máximo de 5MB.');
                return;
            }

            setImageFile(file);
            setUploadError('');

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
            const token = authState.token;
            const response = await uploadTripImage(tripId, imageFile, token);
            setTrip((prevTrip) => ({
                ...prevTrip,
                imageUrl: response.data.imageUrl,
            }));
            setImageFile(null);
            setPreviewImage(null);
            alert('Imagen subida exitosamente');
        } catch (err) {
            console.error(err);
            setUploadError(err.response?.data?.msg || 'Error al subir la imagen');
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <p className="loading-text">Cargando...</p>;
    if (error) return <div className="error-message">{error}</div>;
    if (!trip) return <p className="error-message">Itinerario no encontrado.</p>;

    const userId = authState.user ? authState.user._id : null;
    // Convertir IDs a cadenas de texto para evitar problemas de comparación
    const isCreator = userId && trip.createdBy && trip.createdBy._id.toString() === userId;
    const isCollaborator = userId && trip.collaborators && trip.collaborators.some(collab => collab._id.toString() === userId);

    const canEdit = isCreator || isCollaborator;
    const canDelete = isCreator;
    const canShare = isCreator;
    const canDownload = authState.user && ['premium', 'pro', 'vip'].includes(authState.user.role);

    const sortedDays = Object.keys(trip.itinerary)
        .sort((a, b) => {
            const dayA = parseInt(a.replace('dia', ''));
            const dayB = parseInt(b.replace('dia', ''));
            return dayA - dayB;
        })
        .map(dayKey => trip.itinerary[dayKey]);

    const handleDownload = async () => {
        try {
            const response = await api.get(`/trips/download/${tripId}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${trip.title}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Error al descargar el itinerario');
        }
    };

    const handleDelete = async () => {
        try {
            await api.delete(`/trips/${tripId}`);
            alert('Itinerario eliminado exitosamente');
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Error al eliminar el itinerario');
        }
    };

    const handleUpdate = (updatedTrip) => {
        setTrip(updatedTrip);
        setShowEdit(false);
    };

    const handleShare = () => {
        setShowShare(true);
    };

    return (
        <div className="trip-detail-container">
            <div className="trip-detail-overlay">
                <div className="trip-detail-content">
                    <div className="creator-info">
                        Hecho por <Link to={`/users/${trip.createdBy._id}/profile`}>{trip.createdBy.username}</Link>
                    </div>
                    <div className="trip-header">
                        <h2 className="dashboard-title">{trip.title}</h2>
                        <p>{trip.description}</p>
                        <div className="trip-actions">
                            {canEdit && <button className="dashboard-button btn-edit" onClick={() => setShowEdit(true)}>Editar</button>}
                            {canDelete && <button className="dashboard-button btn-delete" onClick={() => setShowDeleteConfirm(true)}>Eliminar</button>}
                            {canShare && (
                                <button className="dashboard-button btn-upload-photo" onClick={() => document.getElementById('imageInput').click()}>
                                    {trip.imageUrl ? 'Cambiar Foto' : 'Añadir Foto'}
                                </button>
                            )}
                            {canDownload && <button className="dashboard-button btn-download" onClick={handleDownload}>Descargar PDF</button>}
                        </div>

                        {/* Previsualización y controles de subida */}
                        {previewImage && (
                            <div className="image-preview">
                                <img src={previewImage} alt="Previsualización" className="itinerary-image-preview" />
                            </div>
                        )}

                        {canEdit && imageFile && (
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

                    <h3 className="section-title-intinerari">Itinerario</h3>
                    <div className="itinerary">
                        {sortedDays.map((day, index) => (
                            <div key={index} className="itinerary-day">
                                <div className="day-header">
                                    <h4>Día {index + 1} - {new Date(day.fecha).toLocaleDateString()}</h4>
                                </div>
                                <div className="activities">
                                    {day.actividades.map((actividad, idx) => (
                                        <div key={idx} className="activity">
                                            <div className="activity-time">{actividad.hora}</div>
                                            <div className="activity-details">
                                                <p className="activity-name">{actividad.actividad}</p>
                                                <p className="activity-location">{actividad.ubicación}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="additional-info">
                                    <p><strong>Alojamiento:</strong> {day.alojamiento}</p>
                                    <p><strong>Transporte:</strong> {day.transporte}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="section-title-intinerari">Actividades Recomendadas</h3>
                    <div className="recommended-activities">
                        {trip.activitiesPerCity && Object.keys(trip.activitiesPerCity).length > 0 ? (
                            Object.entries(trip.activitiesPerCity).map(([city, activities], index) => (
                                <div key={index} className="city-activities">
                                    <h4>{city}</h4>
                                    <div className="activities-list">
                                        {activities.length > 0 ? (
                                            activities.map((activity, idx) => (
                                                <div key={idx} className="recommended-activity">
                                                    <img src={activity.imageUrl} alt={activity.title} className="activity-image" />
                                                    <div className="activity-info">
                                                        <h5>{activity.title}</h5>
                                                        <p>{activity.description}</p>
                                                        <a href={activity.link} target="_blank" rel="noopener noreferrer" className="activity-link">Ver Detalles</a>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No hay actividades recomendadas para esta ciudad.</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay actividades recomendadas disponibles.</p>
                        )}
                    </div>

                    {trip.imageUrl && (
                        <div className="representative-image-section">
                            <h3 className="section-title-intinerari">Imagen Representativa</h3>
                            <img src={trip.imageUrl} alt="Itinerario Representativo" className="representative-image" />
                        </div>
                    )}

                    <h3 className="section-title-intinerari">Comentarios</h3>
                    <CommentList tripId={tripId} />
                    <CommentForm tripId={tripId} refreshTrip={fetchTrip} />

                    {showEdit && <EditTrip trip={trip} onClose={() => setShowEdit(false)} onUpdate={handleUpdate} />}
                    {showDeleteConfirm && <ConfirmDeleteModal onClose={() => setShowDeleteConfirm(false)} onConfirm={handleDelete} />}

                    {canEdit && (
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TripDetail;