'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState({
        submitting: false,
        error: null,
        success: false,
    });

    const [validations, setValidations] = useState({});

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init('sFj3v2V-DlQzMZeao');
    }, []);

    const validateField = (name, value) => {
        let error = '';
        let success = '';

        switch (name) {
            case 'name':
                if (!value.trim()) error = 'This field is required';
                else if (value.length < 2) error = 'Name must be at least 2 characters';
                else success = 'Looks good!';
                break;
            case 'phone':
                const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
                if (!value.trim()) error = 'Phone number is required';
                else if (!phoneRegex.test(value)) error = 'Please enter a valid phone number';
                else success = 'Phone number is valid';
                break;
            case 'email':
                if (value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) error = 'Please enter a valid email address';
                    else success = 'Email is valid';
                }
                break;
            default:
                break;
        }

        setValidations(prev => ({
            ...prev,
            [name]: { error, success }
        }));

        return !error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear validation on input
        if (validations[name]) {
            setValidations(prev => ({
                ...prev,
                [name]: { error: '', success: '' }
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all required fields
        const isNameValid = validateField('name', formData.name);
        const isPhoneValid = validateField('phone', formData.phone);

        if (!isNameValid || !isPhoneValid) {
            if (typeof window !== 'undefined' && window.WadhwaProperties) {
                window.WadhwaProperties.showNotification('Please fix the errors in the form.', 'error');
            }
            return;
        }

        setStatus({ submitting: true, error: null, success: false });

        try {
            const templateParams = {
                from_name: formData.name,
                from_phone: formData.phone,
                from_email: formData.email || 'Not provided',
                service_type: formData.service || 'Not specified',
                message: formData.message || 'No message provided',
            };

            const response = await emailjs.send(
                'service_xqn2pos',
                'template_r3v1xjw',
                templateParams
            );

            if (response.status === 200) {
                setStatus({ submitting: false, error: null, success: true });
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                setValidations({});

                if (typeof window !== 'undefined' && window.WadhwaProperties) {
                    window.WadhwaProperties.showNotification('Thank you! We will contact you within 24 hours.', 'success');

                    setTimeout(() => {
                        if (confirm('Would you like to call us directly?')) {
                            window.open('tel:+919810623803', '_self');
                        }
                    }, 3000);
                }
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({ submitting: false, error: error.message, success: false });
            if (typeof window !== 'undefined' && window.WadhwaProperties) {
                window.WadhwaProperties.showNotification('Failed to send message. Please try calling us directly.', 'error');
            }
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get in Touch</h2>
                    <p>Ready to find your dream property? Let's connect and make it happen</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">📞</div>
                                <div className="method-content">
                                    <h4>Call Us Directly</h4>
                                    <a href="tel:+919810623803" className="contact-link">Primary Contact : +91 98106 23803</a>
                                    <a href="tel:+917011084247" className="contact-link">Secondary Contact : +91 70110 84247</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon">✉️</div>
                                <div className="method-content">
                                    <h4>Email Us</h4>
                                    <a href="mailto:wadhwaproperties16@gmail.com" className="contact-link">wadhwaproperties16@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-content">
                                    <h4>Visit Our Office</h4>
                                    <p className="contact-address">H.No 178, Sector 16<br />Faridabad, Haryana 121002</p>
                                    <div className="office-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.0745755461396!2d77.31772!3d28.408897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc31f4f5147f%3A0x7e277dd0c1c72bb5!2sH.No%20178%2C%20Sector%2016%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1692101234567!5m2!1sen!2sin"
                                            width="100%"
                                            height="200"
                                            style={{ border: 0, borderRadius: '8px', marginTop: '12px' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="whatsapp-cta">
                            <a href="https://wa.me/919810623803" target="_blank" className="btn btn--success btn--full-width">
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-section">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className={`form-validation ${validations.name?.error ? 'error' : 'success'}`}>
                                        {validations.name?.error || validations.name?.success}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-control"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className={`form-validation ${validations.phone?.error ? 'error' : 'success'}`}>
                                        {validations.phone?.error || validations.phone?.success}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className={`form-validation ${validations.email?.error ? 'error' : 'success'}`}>
                                    {validations.email?.error || validations.email?.success}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service" className="form-label">Service Required</label>
                                <select
                                    id="service"
                                    name="service"
                                    className="form-control"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    <option value="property-sale">Property Sale</option>
                                    <option value="property-purchase">Property Purchase</option>
                                    <option value="property-rental">Property Rental</option>
                                    <option value="consultation">Consultation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn--primary btn--full-width form-submit-btn"
                                disabled={status.submitting}
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
