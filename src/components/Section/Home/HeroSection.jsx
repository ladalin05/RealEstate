import React, { useState } from 'react';
import BACKGROUND_IMAGE_URL from '../../../assets/images/slider1.jpg'
import { useNavigate } from 'react-router-dom';
import { Selects } from '../../Form/Selects';
import { useFectDataFilter } from '../../../hooks/useFectProperty';
import '../../../assets/styles/section.css';

const HeroSection = () => {

  const navigate = useNavigate();
  const [filters, setFilters] = useState({ search_text: "", purpose: "", type_id: "", location_id: "", bedrooms: "", bathrooms: "", furnishing: "", verified: "",  price_range: "",  });
  const { dataFilter, loading, error} = useFectDataFilter();

  const handleChange = (e) => {
      setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectOptions = {
    categories: [
      { name: "Property Type", value: "All" }, ...(dataFilter?.types || [])
    ]
  }

  const handleSubmit = (e) => {
      navigate("/properties", { state: { filtterData: filters } });
  }

  return (
    <div className="hero-v3 d-flex align-items-center" 
         style={{ height: '120vh', backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <span className="badge rounded-pill bg-white text-primary mb-3 px-3 py-2 fw-bold shadow-sm">
              ✨ THE BEST WAY TO
            </span>
            <h1 className="display-3 text-white fw-bold mb-4">Find Your <span className="text-info">Dream Home</span></h1>
            <p className="lead text-white-50 mb-5">Explore over 2,000+ luxury properties with verified listings.</p>
            
            {/* Modern Search Bar */}
            <div className="search-glass p-3 py-1 rounded-4 shadow-lg mx-auto" style={{ maxWidth: '800px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div className="row d-flex align-items-center g-2">
                <div className="col-md-6">
                  <input type="text" className="form-control border-0 bg-white" style={{height: 'calc(1.5em + 1rem + 2px)'}} placeholder="Location..." />
                  </div>
                <div className="col-md-5 postition-relative">
                  <Selects name="type_id" value={filters.type_id} options={selectOptions.categories} align={"align-center"} onChange={handleChange} />
                </div>
                <button type="button" onClick={() => handleSubmit()} className="advance-search-icon ud-btn btn-thm ms-2">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;