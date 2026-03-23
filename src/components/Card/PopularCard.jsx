import React, { useState } from 'react';
import { Image } from '../GeneralComponent';
import { useNavigate } from 'react-router-dom';
import { formatPrice, handleFavourit, showProperty } from '../../services/functionService';

const PopularCard = ({ property }) => {
  const navigate = useNavigate();
  const { id, title, image, purpose, verified, type_name, price, address, user_name_en, is_favourite, user_image } = property;
  const [isFavourite, setIsFavourite] = useState(is_favourite);

  const showProperty = async (propertyId) => {
      navigate("/property-detail", { state: { propertyId: propertyId } });
  }
  
  return (
    <div className="card border-0 shadow-sm property-card">
      {/* Image Section */}
      <div className="position-relative">
        <a className="vfx-property-img" title={title}  onClick={() => showProperty(id)} >
          <Image type_image={image ? `storage/`+image : null} type_name={"Property"} defaultImage={"http://127.0.0.1:8000/upload/placeholder_img.jpg"} className={"card-img-top property-img"}  />
        </a>
        {/* Purpose Badge */}
        <span className="badge bg-primary position-absolute text-capitalize top-0 start-0 m-3">{purpose}</span>
        {/* Favorite Icon */}
        <button 
          className="border-0 rounded-circle bg-light d-flex justify-content-center align-items-center position-absolute top-0 end-0 m-3"
          style={{width: '28px', height: '28px'}}
          onClick={() => handleFavourit(id, setIsFavourite, isFavourite)}
        >
          <i className={`fa-${isFavourite ? 'solid text-danger' : 'regular'} fa-heart`}></i>
        </button>
        <span className="rounded py-1 px-3 border-0 bg-light position-absolute bottom-0 start-0 m-3 fw-bold" style={{ letterSpacing: '1px'}} >{formatPrice(price)}</span>
      </div>

      <div className="card-body" style={{width: '100%'}}>
        
        <div className="d-flex justify-content-between align-items-center ">
            <h6 className="card-title-text text-truncate">{title}</h6>
        </div>
        <p className="text-muted "><i className="fa-solid fa-location-dot me-1"></i> {address.replace('Cambodia,', '') || "No Address"}</p>
        <div className="property-features d-flex gap-4 mt-3 ms-1">
            <span className="text-center"><i className="fa-solid fa-bed"></i> <br /> 3 Bed</span>
            <span className="text-center"><i className="fa-solid fa-shower-down"></i> <br /> 2 Bath</span>
            <span className="text-center"><i className="fa-solid fa-expand"></i> <br /> 1,200 sqft</span>
        </div>
      </div>
      {/* Content */}

      {/* <div className="card-footer bg-white border-top-0 mt-0 ">
        <div className="d-flex align-items-center">
          <img src={user_image ? `http://127.0.0.1:8000/${user_image}` : 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg'} 
               alt={user_name_en} className="rounded-circle me-2" width="30" height="30" />
          <span className="small text-muted">{user_name_en || "No User"}</span>
        </div>
      </div> */}
    </div>
  );
};

export default PopularCard;