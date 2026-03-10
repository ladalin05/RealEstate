import React, { Component, useState } from 'react';
import { Selects } from './Selects';
import { useFectDataFilter, useFetchProperty } from '../../hooks/useFectProperty';
import { Image } from '../GeneralComponent';
import { formatPrice } from '../../services/functionService';
import '../../assets/styles/property.css';
 

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
      <aside className="filter-sidebar">
            {/* Search Widget */}
            <div className="card-widget">
                <h3 className="widget-title">Search Properties</h3>
                <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="search_text" className="form-input" placeholder="Keyword (e.g. Modern Villa)" value={filters.search_text} onChange={handleChange} />
                    
                    <div className="select-grid">
                        <Selects name="purpose" value={filters.purpose} options={selectOptions.purpose} onChange={handleChange} />
                        <Selects name="type_id" value={filters.type_id} options={selectOptions.type} onChange={handleChange} />
                    </div>
                    
                    <Selects name="location_id" value={filters.location_id} options={selectOptions.location} onChange={handleChange} />
                    <Selects name="bedrooms" value={filters.bedrooms} options={selectOptions.bedrooms} onChange={handleChange} />
                    
                    <input type="text" name="price_range" className="form-input" placeholder="Price Range" value={filters.price_range} onChange={handleChange} />
                    
                    <button className="btn-search">Search Now</button>
                </form>
            </div>

            {/* Latest Properties Widget */}
            <div className="card-widget">
                <h3 className="widget-title">Recently Listed</h3>
                <div className="latest-list">
                    {latest.map((item) => (
                        <article key={item.id} className="latest-item property-image-container">
                            <Image type_image={item.image ? `storage/${item.image}` : null} defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={item.title} style={{width: "45%", height: "auto",}} className={'property-image rounded'}/>
                            <div className='mt-2'>
                                <h4>{item.title}</h4>
                                <p className="price">{formatPrice(item.price)}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </aside>
    )
}
