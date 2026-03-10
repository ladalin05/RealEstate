import React, { useState } from 'react';
import sectionImage from '../assets/images/breadcrumb.jpg';
import { BannerSection } from "../components/Section/BannerSection";
import '../assets/styles/contact.css';

const ContactUsPage = ({ contact_info }) => {
    const { contact, contactLoading } = contact_info || {};
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add your API logic here
    }

    return (
        <div className="container-fluid contact-page-wrapper bg-light-soft">
            <BannerSection sectionImage={sectionImage} section_title="Get In Touch" currentPage="Contact" />
            
            <div className="container py-5 my-5">
                <div className="row g-0 shadow-lg rounded-4 overflow-hidden bg-white">
                    
                    {/* Left Side: Contact Information (Dark Theme) */}
                    <div className="col-lg-5 bg-primary p-5 text-white d-flex flex-column justify-content-between">
                        <div>
                            <h2 className="display-6 fw-bold mb-4">Contact Information</h2>
                            <p className="opacity-75 mb-5">Fill out the form and our team will get back to you within 24 hours.</p>
                            
                            <div className="contact-details">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-box me-3"><i className="fa fa-phone"></i></div>
                                    <div>
                                        <p className="mb-0 small opacity-75">Phone</p>
                                        <a href={`tel:${contact?.contact_phone}`} className="text-white text-decoration-none fw-semibold">{contact?.contact_phone || '+1 (555) 000-0000'}</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-box me-3"><i className="fa fa-envelope"></i></div>
                                    <div>
                                        <p className="mb-0 small opacity-75">Email</p>
                                        <a href={`mailto:${contact?.contact_email}`} className="text-white text-decoration-none fw-semibold">{contact?.contact_email || 'hello@brand.com'}</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-box me-3"><i className="fa fa-map-marker"></i></div>
                                    <div>
                                        <p className="mb-0 small opacity-75">Location</p>
                                        <p className="mb-0 fw-semibold">{contact?.contact_address || '123 Tech Avenue, NY'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="social-links d-flex gap-3 mt-5">
                            {[ 
                                { icon: 'facebook-f', link: contact?.facebook },
                                { icon: 'twitter', link: contact?.twitter },
                                { icon: 'instagram', link: contact?.instagram },
                                { icon: 'youtube', link: contact?.youtube }
                            ].map((soc, i) => (
                                <a key={i} href={soc.link} className="social-circle-btn">{i === 0 ? <i className={`fa fa-${soc.icon}`}></i> : <i className={`fa fa-${soc.icon}`}></i>}</a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="col-lg-7 p-5">
                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase text-muted">Full Name</label>
                                    <input type="text" className="form-control custom-input" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase text-muted">Email Address</label>
                                    <input type="email" className="form-control custom-input" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase text-muted">Phone Number</label>
                                    <input type="text" className="form-control custom-input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234..." />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase text-muted">Subject</label>
                                    <input type="text" className="form-control custom-input" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-bold small text-uppercase text-muted">Message</label>
                                    <textarea className="form-control custom-input" rows="4" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..."></textarea>
                                </div>
                                <div className="col-12 mt-4 text-end">
                                    <button type="submit" className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-sm hover-up">
                                        Send Message <i className="fa fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="map-wrapper rounded-4 shadow-sm overflow-hidden">
                            <iframe 
                                src={contact?.contact_location} 
                                width="100%" height="450" 
                                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                                allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;