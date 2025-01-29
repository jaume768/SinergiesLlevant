import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersection } from '../../hooks/useIntersection';
import './Contact.css';

const SERVICE_ID = 'TU_SERVICE_ID';     // <- reemplaza
const TEMPLATE_ID = 'TU_TEMPLATE_ID';   // <- reemplaza
const PUBLIC_KEY = 'TU_PUBLIC_KEY';     // <- reemplaza (EmailJS)

// Clave pública de reCAPTCHA
const RECAPTCHA_SITE_KEY = 'TU_RECAPTCHA_SITE_KEY'; // <- reemplaza con tu site key

const Contact = () => {
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Para almacenar el token del reCAPTCHA
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    // Usaremos una ref al formulario para pasársela directamente a emailjs
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Al completar el captcha, Google reCAPTCHA envía el token
    const handleRecaptcha = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si el captcha está resuelto
        if (!recaptchaToken) {
            alert('Per favor, verifica que no ets un robot.');
            return;
        }

        // Llamada a EmailJS
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log('Correo enviado:', result.text);
                    alert('Missatge enviat correctament!');
                    setFormData({ name: '', email: '', message: '' });
                    setRecaptchaToken(null);
                },
                (error) => {
                    console.error('Error al enviar correo:', error.text);
                    alert('Error en enviar el missatge, intenta-ho més tard.');
                }
            );
    };

    return (
        <section
            ref={sectionRef}
            className={`contact-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}
        >
            <h2 className="contact-title">CONTACTA AMB NOSALTRES</h2>

            {/* Reemplaza 'ref' con formRef y onSubmit con handleSubmit */}
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="El teu nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correu electrònic</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="correu@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Missatge</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Explica el teu dubte o consulta..."
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Google reCAPTCHA */}
                <div className="form-group recaptcha-group">
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptcha}
                    />
                </div>

                <button type="submit" className="send-button">
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default Contact;
