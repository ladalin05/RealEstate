import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Apple, PlayFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-dark pt-5 pb-3">
      <div className="container">
        {/* Top Section: Logo and Newsletter */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center logo-brand">
              <div className="logo-icon me-2">H</div>
              <h3 className="mb-0 text-white fw-bold">homez</h3>
            </div>
          </div>
          <div className="col-md-8">
            <div className="newsletter-wrapper">
              <p className="text-white fw-bold mb-3">Keep Yourself Up to Date</p>
              <div className="input-group newsletter-input">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-subscribe" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary opacity-25 my-5" />

        {/* Middle Section: Links and Apps */}
        <div className="row">
          <div className="col-lg-4 mb-5">
            <div className="row mb-4">
              <div className="col-6">
                <p className="text-secondary small mb-1">Total Free Customer Care</p>
                <h6 className="text-white">+(0) 123 050 945 02</h6>
              </div>
              <div className="col-6">
                <p className="text-secondary small mb-1">Need Live Support?</p>
                <h6 className="text-white">hi@homez.com</h6>
              </div>
            </div>
            
            <p className="text-white fw-bold mb-3">Apps</p>
            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-app shadow-sm">
                <Apple size={20} className="me-2" />
                <div className="text-start">
                  <small className="d-block">Download on the</small>
                  <strong>Apple Store</strong>
                </div>
              </button>
              <button className="btn btn-app shadow-sm google-btn">
                <PlayFill size={20} className="me-2" />
                <div className="text-start">
                  <small className="d-block">Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>

            <p className="text-white fw-bold mb-3">Follow us on social media</p>
            <div className="d-flex gap-4 social-links">
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Linkedin /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <h6 className="text-white fw-bold mb-4">Popular Search</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Apartment for Rent</a></li>
              <li><a href="#">Apartment Low to Hide</a></li>
              <li><a href="#">Offices for Buy</a></li>
              <li><a href="#">Offices for Rent</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <h6 className="text-white fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-6 mb-4">
            <h6 className="text-white fw-bold mb-4">Discover</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Miami</a></li>
              <li><a href="#">Los Angeles</a></li>
              <li><a href="#">Chicago</a></li>
              <li><a href="#">New York</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-secondary opacity-25 mt-5 mb-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary small">
          <p className="mb-2 mb-md-0">© Homez 2024 ib-themes - All rights reserved</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">Privacy</a>
            <span>·</span>
            <a href="#" className="text-secondary text-decoration-none">Terms</a>
            <span>·</span>
            <a href="#" className="text-secondary text-decoration-none">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;