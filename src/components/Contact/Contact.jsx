import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersection } from '../../hooks/useIntersection';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const SERVICE_ID = 'service_hp5t6vj';
const TEMPLATE_ID = 'template_u2gbd7f';
const PUBLIC_KEY = '9cgVf8auM-uTGrWOI';
const RECAPTCHA_SITE_KEY = '6LctQs4qAAAAAEz02LPCCzQgVR4v5bQEYTnfy45_';

const Contact = () => {
    const { t } = useTranslation();
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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRecaptcha = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert(t('contact.recaptchaAlert'));
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log('Correo enviado:', result.text);
                    alert(t('contact.successAlert'));
                    setFormData({ name: '', email: '', message: '' });
                    setRecaptchaToken(null);
                },
                (error) => {
                    console.error('Error al enviar correo:', error.text);
                    alert(t('contact.errorAlert'));
                }
            );
    };

    return (
        <section ref={sectionRef} className={`contact-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}>
            <h2 className="contact-title">{t('contact.title')}</h2>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t('contact.labels.name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('contact.placeholders.name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contact.labels.email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('contact.placeholders.email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contact.labels.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.placeholders.message')}
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group recaptcha-group">
                    <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptcha} />
                </div>
                <button type="submit" className="send-button">
                    {t('contact.sendButton')}
                </button>
            </form>
        </section>
    );
};

export default Contact;