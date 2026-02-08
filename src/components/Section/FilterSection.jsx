import React, { Component, useState } from 'react';
import { Selects } from './Selects';
import { useFectDataFilter, useFetchProperty } from '../../hooks/useFectProperty';
import { Image } from '../GeneralComponent';
import { formatPrice } from '../../services/functionService';
 

export const FilterSection = ({ filters, setFilters }) =>  {
  
    const { property, propLoading, properror } = useFetchProperty();
    const { dataFilter, loading, error} = useFectDataFilter();
    const latest = property!=null ? property.slice(0, 5) : [];
    const defaultPropertyImage = 'http://127.0.0.1:8000/upload/placeholder_img.jpg';

    const submitSearch = (e) => {
      e.preventDefault();
    };

    
    const handleChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Form data state
    const selectOptions = { purpose: [ { name: "Purpose", value: "All" }, { name: "Sale", value: "Sale" }, { name: "Rent", value: "Rent" }, ],
                            bedrooms: [ { name: "Bedrooms: Any", value: "All" }, { name: "1", value: "1" }, { name: "2", value: "2" }, { name: "3", value: "3" }, { name: "4", value: "4" }, { name: "5+", value: "5" }, ],
                            furnishing: [ { name: "Furnishing", value: "furnishing" }, { name: "Unfurnished", value: "unfurnished" }, { name: "Semi-Furnished", value: "semi-furnished" }, { name: "Furnished", value: "furnished" }, ],
                            verified: [ { name: "Verified Status", value: "All" }, { name: "Verified", value: "YES" }, { name: "Not Verified", value: "NO" }, ],
                            location: [ { name: "Location", value: "All" }, ...(dataFilter?.locations || [])],
                            type: [ { name: "Property Type", value: "All" }, ...(dataFilter?.types || []) ]}
    return (
      <div className="sidebar-left bg-white p-3 py-4 mt-3 sidebar">
        <div className="widget filter-widget search p-3 rounded shadow-sm">
            <h3 className="widget-title">Advanced Search Filter</h3>

        <form onSubmit={submitSearch} className='vfx_hero_form_area vfx2 filter' >
          <input type="text" name="search_text" className="form-control mb-3" placeholder="Search by title" value={filters.search_text} onChange={handleChange} />

          <Selects name="purpose" value={filters.purpose} options={selectOptions.purpose} onChange={handleChange} />

          <Selects name="type_id" value={filters.type_id} options={selectOptions.type} onChange={handleChange} />

          <Selects name="location_id" value={filters.location_id} options={selectOptions.location} onChange={handleChange} />

          <Selects name="bedrooms" value={filters.bedrooms} options={selectOptions.bedrooms} onChange={handleChange} />

          <Selects name="furnishing" value={filters.furnishing} options={selectOptions.furnishing} onChange={handleChange} />

          <Selects name="verified" value={filters.verified} options={selectOptions.verified} onChange={handleChange} />

          {/* Price range text (you can replace later with real slider) */}
          <input type="text" name="price_range" className="form-control mb-4" placeholder="Price Range" value={filters.price_range} onChange={handleChange} />

          <button className="btn btn-primary w-100">Search</button>
        </form>
      </div>

      {/* Latest Properties */}
      <div className="widget recent p-3 rounded shadow-sm mt-4">
        <h3 className="widget-title">Latest Property</h3>
          {latest.map((latest) => (
              <article key={latest.id} className="property-card">
                  <div className="property-image-container">
                          <Image type_image={latest.image ? `storage/`+latest.image : null }  defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={latest.title} style={{width: "45%", height: "auto",}} className={"property-image rounded"} />
                      
                      <div className="property-details ms-3">
                          <span className={`property-category-tag `}>
                              {latest.category}
                          </span>
                          <h3 className="property-title">{latest.title}</h3>
                          <p className="property-location">
                              <i className="fas fa-map-marker-alt"></i> {latest.location || latest.address}
                          </p>
                          <div className="property-price-tag">{formatPrice(latest.price)}</div>
                      </div>
                  </div>
                  <hr className="card-separator" />
              </article>
          ))}
      </div>
    </div>
    )
}
