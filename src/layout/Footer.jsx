import React from 'react';

const Footer = () => {


// --- Static Data for the Footer ---
const footerData = {
    quickLinks: [
        { name: "Terms Of Use", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Delete Account Instruction", href: "#delete" },
    ],
    contact: {
        email: "info@example.com",
        phone: "+91 9876541233",
        address: "3rd Floor, Shyam Complex, Parivar Park, near Mayani Chowk, Rajkot, Gujarat",
    },
    socialLinks: [
        { icon: "facebook-f", href: "#", color: "#4267B2" },
        { icon: "twitter", href: "#", color: "#1DA1F2" },
        { icon: "youtube", href: "#", color: "#FF0000" },
        { icon: "instagram", href: "#", color: "#C13584" },
    ],
    copyrightYear: new Date().getFullYear(),
    companyDomain: ""
};

    return (
        <footer className="app-footer">
            
            <div className="container footer-content">
                <div className="row">
                    
                    {/* Column 1: Quick Links */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="quick-links-list">
                            {footerData.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-decoration-none">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="footer-heading">Contact Us</h5>
                        
                        <div className="contact-item">
                            <i className="fas fa-envelope contact-icon"></i>
                            <a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-phone contact-icon"></i>
                            <a href={`tel:${footerData.contact.phone}`}>{footerData.contact.phone}</a>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt contact-icon"></i>
                            <span>{footerData.contact.address}</span>
                        </div>
                    </div>

                    {/* Column 3: Follow Us */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="footer-heading">Follow Us</h5>
                        <ul className="social-list">
                            {footerData.socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a  href={link.href}  target="_blank"  rel="noopener noreferrer"  className="social-btn text-decoration-none"
                                        style={{ backgroundColor: link.color }} >
                                        <i className={`fab fa-${link.icon}`}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                
                {/* Copyright Section */}
                <div className="row">
                    <div className="col-12">
                        <div className="copyright-area">
                            Copyright © {footerData.copyrightYear} {footerData.companyDomain}. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;