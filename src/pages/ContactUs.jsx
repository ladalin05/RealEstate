import React, { useState } from 'react';
import sectionImage from '../assets/images/breadcrumb.jpg';
import { BannerSection } from "../components/Section/BannerSection";
 

const ContactUsPage = ({contact_info}) => {

    const {contact, contactLoading, contactError} = contact_info || {};
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="homepage-content bg-white">
            <BannerSection sectionImage={sectionImage} section_title="Contact Us" currentPage="Contact Us" />
            <div className="container p-5">
                <div className="row g-4 mb-5 justify-content-center">
                    
                    {/* Address Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-item text-center p-4 shadow-sm h-100">
                            <i className="fa fa-map-marker contact-icon mb-3"></i>
                            <h4 className="info-title">Address</h4>
                            <p className="info-text">{contact?.contact_address}</p>
                        </div>
                    </div>
                    
                    {/* Contact Us Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-item text-center p-4 shadow-sm h-100">
                            <i className="fa fa-phone contact-icon mb-3"></i>
                            <h4 className="info-title">Contact Us</h4>
                            <ul className="list-unstyled info-list">
                                <li><strong>Phone: </strong> <a href={`tel:${contact?.contact_phone}`} className='text-decoration-none'>{contact?.contact_phone}</a></li>
                                <li><strong>Email: </strong> <a href={`mailto:${contact?.contact_email}`} className='text-decoration-none'>{contact?.contact_email}</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Follow Us Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-item text-center p-4 shadow-sm h-100">
                            <i className="fa fa-calendar contact-icon mb-3"></i>
                            <h4 className="info-title">Follow Us</h4>
                            <ul className="vfx-social-button social-list list-unstyled d-flex justify-content-center mt-3">
                                <li><a href={contact?.facebook} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href={contact?.twitter} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa fa-twitter"></i></a></li>
                                <li><a href={contact?.youtube} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa fa-youtube"></i></a></li>
                                <li><a href={contact?.instagram} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* --- Form and Map Row --- */}
                <div className="row g-5">
                    
                    {/* --- Get In Touch Form Column --- */}
                    <div className="col-md-6">
                        <div className="section-title mb-4">
                            <h2 className="title-heading">Get In Touch</h2>
                        </div>
                        
                        {/* Start Form */}
                        <form onSubmit={handleSubmit} className="contact-form p-4 border rounded">
                            
                            <div className="row g-3">
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            id="name"
                                            placeholder="Name*" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                            id="email"
                                            placeholder="Email*" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3 mt-3">
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            id="phone"
                                            placeholder="Phone" 
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject*" 
                                            name="subject" 
                                            value={formData.subject} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control" 
                                            rows={4} 
                                            id="message"
                                            placeholder="Message" 
                                            name="message" 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-12 d-flex justify-content-start">
                                    <button type="submit" className="btn vfx7">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* --- Map Embed Column --- */}
                    <div className="col-md-6">
                        <div className="contact-map border rounded overflow-hidden shadow-sm h-100">
                            <div className="map-embed-container">
                                <iframe src={contact?.contact_location} width="100%" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;