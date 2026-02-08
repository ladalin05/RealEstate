
import React, { useState } from 'react';
import { Image } from '../GeneralComponent';
import { useNavigate } from 'react-router-dom';
import { formatPrice, handleFavourit, showProperty } from '../../services/functionService';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const { id, title, slug, image, purpose, verified, type_name, price, address, location_name, user_name, is_favourite, user_image } = property;
  const defaultUserImage = 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg';
  const defaultPropertyImage = 'http://127.0.0.1:8000/upload/placeholder_img.jpg';
  const [isFavourite, setIsFavourite] = useState(is_favourite);
  
  return (
    <div className="vfx-single-property-box-area">
      <div className="vfx-property-item"> 
        <a className="vfx-property-img" title={title}  onClick={() => showProperty(id, navigate)} >
          <Image type_image={image ? `storage/`+image : null} type_name={"Property"} defaultImage={defaultPropertyImage} className={"img-fluid"}  />
        </a>
        
        <ul className="vfx-feature-text list-unstyled p-0">
          <li className={`feature_${purpose === 'Rent' ? 'cb' : 'or'}`}>
            <span>{purpose}</span>
          </li>
          {verified === 'YES' && (
            <li className="" data-bs-toggle="tooltip" title="Verified">
              <i className="fa-solid fa-check"></i>
            </li>
          )}
        </ul>
        
        <div className="vfx-property-author-wrap"> 
          <p className="text-tlt mb-0">{type_name}</p>
          <ul className="vfx-save-btn list-unstyled mb-0 d-flex">
            <li data-bs-toggle="tooltip" title="Set Favourite" data-id={id}>
              <a title="Favourite" onClick={() => handleFavourit(id, setIsFavourite, isFavourite)} >
                <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart`} style={{color: '#fff',}} ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="vfx-property-title-box-area">
        <div className="property-info">
            <h4>
                <a onClick={() => showProperty(id,navigate)} title={title}>{title}</a>
            </h4>
            <div className="vfx-property-location d-flex align-items-center mb-2 text-muted"> 
                <i className="fa fa-map-marker me-2"></i>
                <p className="mb-0 small">{location_name || address}</p>
            </div>
        </div>
        
        <div className="trending-bottom d-flex justify-content-between align-items-center pt-2 border-top">
          <div className="trend-left">
            <div className="vfx-property-author-wrap position-relative bg-transparent p-0"> 
              <a href='#' className="property-author d-flex align-items-center justify-content-center text-dark text-decoration-none" title="user profile"> 
                <img 
                  src={user_image || defaultUserImage} 
                  alt="user_image" 
                  className="rounded-circle m-auto border border-secondary" 
                  style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                /> 
                <span className='small fw-semibold'>{user_name}</span> 
              </a>
            </div>
          </div>
          <a onClick={() => showProperty(id,navigate)} className="vfx-trend-right" title={title}>
            <div className="vfx-trend-open-price">{formatPrice(price) }</div> 
          </a> 
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;