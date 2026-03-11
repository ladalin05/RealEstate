
import React from 'react';
import { Image } from '../GeneralComponent';

const CategoryItem = ({ type }) => {
  const { id, type_name, type_slug, type_image } = type;
  
  const link = `/types/${type_slug}/${id}`;

  
  return (
      <div className="category-item-v2 text-center p-3">
        <a href={`/types/${type_slug}/${type.id}`} className="text-decoration-none group">
          <div className="cat-circle shadow-sm mb-4 mx-auto">
            <img src={`http://127.0.0.1:8000/storage/${type_image}`} alt={type.type_name} /> 
          </div>
          <h6 className="text-dark fw-bold mb-0">{type_name}</h6>
        </a>
      </div>
  );
};

export default CategoryItem;