
import React from 'react';
import { Image } from '../GeneralComponent';

const CategoryItem = ({ type }) => {
  const { id, type_name, type_slug, type_image } = type;
  
  const link = `/types/${type_slug}/${id}`;

  
  return (
        <div key={type.id} className="category-card">
          <div className="icon-circle shadow-sm">
              <img src={`http://127.0.0.1:8000/storage/${type_image}`} width={'100%'} alt={type.type_name} /> 
          </div>
            <h3 className="card-name">{type_name}</h3>
            <p className="card-count"> Properties</p>
        </div>
  );
};

export default CategoryItem;