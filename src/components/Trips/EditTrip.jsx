import React, { useState } from 'react';
import { FaTrash, FaPlus, FaClock, FaListAlt, FaMapMarkerAlt } from 'react-icons/fa';
import api from '../../utils/api';
import './css/Modal.css';
import './css/EditTrip.css';

const EditTrip = ({ trip, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: trip.title,
        description: trip.description,
        itinerary: { ...trip.itinerary },
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [collapsedDays, setCollapsedDays] = useState(
        Object.keys(trip.itinerary).reduce((acc, day) => ({ ...acc, [day]: true }), {})
    );
    const [formErrors, setFormErrors] = useState({});

    const toggleCollapse = (dayKey) => {
        setCollapsedDays(prev => ({ ...prev, [dayKey]: !prev[dayKey] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleDateChange = (dayKey, value) => {
        setFormData(prev => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                [dayKey]: {
                    ...prev.itinerary[dayKey],
                    fecha: value,
                },
            },
        }));
        validateField(`fecha_${dayKey}`, value);
    };

    const handleActivityChange = (dayKey, activityIndex, field, value) => {
        setFormData(prev => {
            const updatedActivities = prev.itinerary[dayKey].actividades.map((actividad, idx) => {
                if (idx === activityIndex) {
                    return { ...actividad, [field]: value };
                }
                return actividad;
            });

            return {
                ...prev,
                itinerary: {
                    ...prev.itinerary,
                    [dayKey]: {
                        ...prev.itinerary[dayKey],
                        actividades: updatedActivities,
                    },
                },
            };
        });
        validateField(`${field}_${dayKey}_${activityIndex}`, value);
    };

    const addActivity = (dayKey) => {
        setFormData(prev => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                [dayKey]: {
                    ...prev.itinerary[dayKey],
                    actividades: [
                        ...prev.itinerary[dayKey].actividades,
                        { hora: '', actividad: '', ubicación: '' },
                    ],
                },
            },
        }));
    };

    const removeActivity = (dayKey, activityIndex) => {
        setFormData(prev => {
            const updatedActivities = prev.itinerary[dayKey].actividades.filter((_, idx) => idx !== activityIndex);
            return {
                ...prev,
                itinerary: {
                    ...prev.itinerary,
                    [dayKey]: {
                        ...prev.itinerary[dayKey],
                        actividades: updatedActivities,
                    },
                },
            };
        });
    };

    const handleAdditionalInfoChange = (dayKey, field, value) => {
        setFormData(prev => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                [dayKey]: {
                    ...prev.itinerary[dayKey],
                    [field]: value,
                },
            },
        }));
        validateField(`${field}_${dayKey}`, value);
    };

    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = 'Este campo es obligatorio';
        }
        // Puedes agregar más validaciones según sea necesario
        setFormErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        // Validar título y descripción
        if (!formData.title.trim()) {
            errors.title = 'Este campo es obligatorio';
            valid = false;
        }
        if (!formData.description.trim()) {
            errors.description = 'Este campo es obligatorio';
            valid = false;
        }

        // Validar itinerario
        Object.keys(formData.itinerary).forEach(dayKey => {
            const day = formData.itinerary[dayKey];
            if (!day.fecha.trim()) {
                errors[`fecha_${dayKey}`] = 'Fecha es obligatoria';
                valid = false;
            }
            day.actividades.forEach((actividad, idx) => {
                if (!actividad.hora.trim()) {
                    errors[`hora_${dayKey}_${idx}`] = 'Hora es obligatoria';
                    valid = false;
                }
                if (!actividad.actividad.trim()) {
                    errors[`actividad_${dayKey}_${idx}`] = 'Actividad es obligatoria';
                    valid = false;
                }
                if (!actividad.ubicación.trim()) {
                    errors[`ubicación_${dayKey}_${idx}`] = 'Ubicación es obligatoria';
                    valid = false;
                }
            });
            if (!day.alojamiento.trim()) {
                errors[`alojamiento_${dayKey}`] = 'Alojamiento es obligatorio';
                valid = false;
            }
            if (!day.transporte.trim()) {
                errors[`transporte_${dayKey}`] = 'Transporte es obligatorio';
                valid = false;
            }
        });

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) {
            setError('Por favor, corrige los errores en el formulario.');
            return;
        }

        setLoading(true);
        try {
            const response = await api.put(`/trips/${trip._id}`, formData);
            onUpdate(response.data.trip);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.msg || 'Error al actualizar el itinerario');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay active">
            <div className="modal-content">
                <h3>Editar Itinerario</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={`title-${trip._id}`}>
                        Título:
                        <input
                            id={`title-${trip._id}`}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className={formErrors.title ? 'invalid' : ''}
                        />
                        {formErrors.title && <span className="field-error">{formErrors.title}</span>}
                    </label>
                    <label htmlFor={`description-${trip._id}`}>
                        Descripción:
                        <textarea
                            id={`description-${trip._id}`}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className={formErrors.description ? 'invalid' : ''}
                        />
                        {formErrors.description && <span className="field-error">{formErrors.description}</span>}
                    </label>
                    <h4>Itinerario:</h4>
                    <div className="progress-indicator">
                        {Object.keys(formData.itinerary).filter(dayKey => formData.itinerary[dayKey].fecha).length} / {Object.keys(formData.itinerary).length} días completados
                    </div>
                    {Object.keys(formData.itinerary).sort((a, b) => {
                        const dayA = parseInt(a.replace('dia', ''));
                        const dayB = parseInt(b.replace('dia', ''));
                        return dayA - dayB;
                    }).map((dayKey, dayIndex) => (
                        <div key={dayKey} className="itinerary-day-edit">
                            <div className="day-header" onClick={() => toggleCollapse(dayKey)}>
                                <h5>Día {dayIndex + 1}</h5>
                                <span>{collapsedDays[dayKey] ? '+' : '-'}</span>
                            </div>
                            {!collapsedDays[dayKey] && (
                                <div className="day-content">
                                    <label htmlFor={`fecha-${dayKey}`}>
                                        Fecha:
                                        <input
                                            id={`fecha-${dayKey}`}
                                            type="date"
                                            value={formData.itinerary[dayKey].fecha}
                                            onChange={(e) => handleDateChange(dayKey, e.target.value)}
                                            required
                                            className={formErrors[`fecha_${dayKey}`] ? 'invalid' : ''}
                                        />
                                        {formErrors[`fecha_${dayKey}`] && <span className="field-error">{formErrors[`fecha_${dayKey}`]}</span>}
                                    </label>
                                    <div className="activities-edit">
                                        <h6>Actividades:</h6>
                                        {formData.itinerary[dayKey].actividades.map((actividad, activityIndex) => (
                                            <div key={activityIndex} className="activity-edit">
                                                <label htmlFor={`hora-${dayKey}-${activityIndex}`}>
                                                    <FaClock /> Hora:
                                                    <input
                                                        id={`hora-${dayKey}-${activityIndex}`}
                                                        type="time"
                                                        value={actividad.hora}
                                                        onChange={(e) => handleActivityChange(dayKey, activityIndex, 'hora', e.target.value)}
                                                        required
                                                        className={formErrors[`hora_${dayKey}_${activityIndex}`] ? 'invalid' : ''}
                                                    />
                                                    {formErrors[`hora_${dayKey}_${activityIndex}`] && <span className="field-error">{formErrors[`hora_${dayKey}_${activityIndex}`]}</span>}
                                                </label>
                                                <label htmlFor={`actividad-${dayKey}-${activityIndex}`}>
                                                    <FaListAlt /> Actividad:
                                                    <input
                                                        id={`actividad-${dayKey}-${activityIndex}`}
                                                        type="text"
                                                        value={actividad.actividad}
                                                        onChange={(e) => handleActivityChange(dayKey, activityIndex, 'actividad', e.target.value)}
                                                        required
                                                        className={formErrors[`actividad_${dayKey}_${activityIndex}`] ? 'invalid' : ''}
                                                    />
                                                    {formErrors[`actividad_${dayKey}_${activityIndex}`] && <span className="field-error">{formErrors[`actividad_${dayKey}_${activityIndex}`]}</span>}
                                                </label>
                                                <label htmlFor={`ubicacion-${dayKey}-${activityIndex}`}>
                                                    <FaMapMarkerAlt /> Ubicación:
                                                    <input
                                                        id={`ubicacion-${dayKey}-${activityIndex}`}
                                                        type="text"
                                                        value={actividad.ubicación}
                                                        onChange={(e) => handleActivityChange(dayKey, activityIndex, 'ubicación', e.target.value)}
                                                        required
                                                        className={formErrors[`ubicación_${dayKey}_${activityIndex}`] ? 'invalid' : ''}
                                                    />
                                                    {formErrors[`ubicación_${dayKey}_${activityIndex}`] && <span className="field-error">{formErrors[`ubicación_${dayKey}_${activityIndex}`]}</span>}
                                                </label>
                                                <button
                                                    type="button"
                                                    className="btn btn-remove-activity"
                                                    onClick={() => removeActivity(dayKey, activityIndex)}
                                                    aria-label="Eliminar Actividad"
                                                    title="Eliminar Actividad"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-add-activity"
                                            onClick={() => addActivity(dayKey)}
                                        >
                                            <FaPlus /> Agregar Actividad
                                        </button>
                                    </div>
                                    <div className="additional-info-edit">
                                        <label htmlFor={`alojamiento-${dayKey}`}>
                                            Alojamiento:
                                            <input
                                                id={`alojamiento-${dayKey}`}
                                                type="text"
                                                value={formData.itinerary[dayKey].alojamiento}
                                                onChange={(e) => handleAdditionalInfoChange(dayKey, 'alojamiento', e.target.value)}
                                                required
                                                className={formErrors[`alojamiento_${dayKey}`] ? 'invalid' : ''}
                                            />
                                            {formErrors[`alojamiento_${dayKey}`] && <span className="field-error">{formErrors[`alojamiento_${dayKey}`]}</span>}
                                        </label>
                                        <label htmlFor={`transporte-${dayKey}`}>
                                            Transporte:
                                            <input
                                                id={`transporte-${dayKey}`}
                                                type="text"
                                                value={formData.itinerary[dayKey].transporte}
                                                onChange={(e) => handleAdditionalInfoChange(dayKey, 'transporte', e.target.value)}
                                                required
                                                className={formErrors[`transporte_${dayKey}`] ? 'invalid' : ''}
                                            />
                                            {formErrors[`transporte_${dayKey}`] && <span className="field-error">{formErrors[`transporte_${dayKey}`]}</span>}
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {error && <div className="error-message">{error}</div>}
                    <div className="modal-actions">
                        <button type="submit" className="btn btn-save" disabled={loading}>
                            {loading ? 'Guardando...' : 'Guardar'}
                        </button>
                        <button type="button" className="btn btn-cancel" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTrip;