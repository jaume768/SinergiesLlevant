import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersection } from '../../hooks/useIntersection';
import './Contact.css';

const SERVICE_ID = 'TU_SERVICE_ID';
const TEMPLATE_ID = 'TU_TEMPLATE_ID';
const PUBLIC_KEY = 'TU_PUBLIC_KEY';

const RECAPTCHA_SITE_KEY = '6LctQs4qAAAAAEz02LPCCzQgVR4v5bQEYTnfy45_';

const Contact = () => {
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRecaptcha = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert('Por favor, completa el reCAPTCHA antes de enviar.');
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log('Correo enviado:', result.text);
                    alert('¡Mensaje enviado correctamente!');
                    setFormData({ name: '', email: '', message: '' });
                    setRecaptchaToken(null);
                },
                (error) => {
                    console.error('Error al enviar correo:', error.text);
                    alert('Error al enviar el mensaje. Inténtalo más tarde.');
                }
            );
    };

    return (
        <section
            ref={sectionRef}
            className={`contact-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}
        >
            <h2 className="contact-title">CONTACTA CON NOSOTROS</h2>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tucorreo@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tu duda o consulta..."
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

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