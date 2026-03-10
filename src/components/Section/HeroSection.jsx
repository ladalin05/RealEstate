import React from 'react';
import '../../assets/styles/section.css';
import BACKGROUND_IMAGE_URL from '../../assets/images/slider1.jpg'

const HeroSection = () => {
  return (
    <div className="hero-v3 position-relative d-flex align-items-center" 
         style={{ height: '85vh', backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${BACKGROUND_IMAGE_URL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <span className="badge rounded-pill bg-white text-primary mb-3 px-3 py-2 fw-bold shadow-sm">
              ✨ THE BEST WAY TO
            </span>
            <h1 className="display-3 text-white fw-bold mb-4">Find Your <span className="text-info">Dream Home</span></h1>
            <p className="lead text-white-50 mb-5">Explore over 2,000+ luxury properties with verified listings.</p>
            
            {/* Modern Search Bar */}
            <div className="search-glass p-3 rounded-4 shadow-lg mx-auto" style={{ maxWidth: '800px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div className="row g-2">
                <div className="col-md-5"><input type="text" className="form-control form-control-lg border-0 bg-white" placeholder="Location..." /></div>
                <div className="col-md-4"><select className="form-select form-select-lg border-0 bg-white"><option>Property Type</option></select></div>
                <div className="col-md-3"><button className="btn btn-primary w-100 h-100">Search</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;