import React from 'react';
import '../../assets/styles/section.css';
import BACKGROUND_IMAGE_URL from '../../assets/images/slider1.jpg'

const HeroSection = () => {
  return (
    <div className="hero vfx2 section-padding" style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}>
      <div className="overlay"></div>
      
      <div className="container vfx-posabs">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="header-text vfx1 text-center text-white">
              <p className="text-uppercase mb-2 mb-md-3 small">THE BEST WAY TO</p>
              <h1 className="display-4 font-weight-bold mb-3 mb-md-4">Find Your Dream Home</h1>
              <p className="lead">We've more than 2,00+ Properties.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Listing filter ends */} 
    </div>
    // Hero section ends
  );
};

export default HeroSection;