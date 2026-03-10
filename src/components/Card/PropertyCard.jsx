import React, { useState } from 'react';
import { Image } from '../GeneralComponent';
import { useNavigate } from 'react-router-dom';
import { formatPrice, handleFavourit, showProperty } from '../../services/functionService';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const { id, title, image, purpose, verified, type_name, price, address, user_name, is_favourite, user_image } = property;
  const [isFavourite, setIsFavourite] = useState(is_favourite);

  return (
    <div className="card h-100 border-0 shadow-sm property-card">
      {/* Image Section */}
      <div className="position-relative">
        <a className="vfx-property-img" title={title}  onClick={() => showProperty(id, navigate)} >
          <Image type_image={image ? `storage/`+image : null} type_name={"Property"} defaultImage={"http://127.0.0.1:8000/upload/placeholder_img.jpg"} className={"card-img-top property-img"}  />
        </a>
        {/* Purpose Badge */}
        <span className="badge bg-primary position-absolute top-0 start-0 m-3">{purpose}</span>
        {/* Favorite Icon */}
        <button 
          className="border-0 rounded-circle bg-light d-flex justify-content-center align-items-center position-absolute top-0 end-0 m-3"
          style={{width: '28px', height: '28px'}}
          onClick={() => handleFavourit(id, setIsFavourite, isFavourite)}
        >
          <i className={`fa-${isFavourite ? 'solid text-danger' : 'regular'} fa-heart`}></i>
        </button>
      </div>

      <div className="card-body" style={{width: '100%'}}>
        <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted small">{type_name}</span>
            {verified && <span className="badge bg-success-subtle text-success small">Verified</span>}
        </div>
        
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="text-muted small"><i className="bi bi-geo-alt me-1"></i> {address}</p>
        <h6 className="text-primary fw-bold">{formatPrice(price)}</h6>
      </div>

      <div className="card-footer bg-white border-top-0 pb-3">
        <div className="d-flex align-items-center">
          <img src={user_image ? `http://127.0.0.1:8000/${user_image}` : 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg'} 
               alt={user_name} className="rounded-circle me-2" width="30" height="30" />
          <span className="small text-muted">{user_name}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;