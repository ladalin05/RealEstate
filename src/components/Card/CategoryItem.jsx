
import React from 'react';
import { Image } from '../GeneralComponent';

const CategoryItem = ({ type }) => {
  const { id, type_name, type_slug, type_image } = type;
  
  const link = `/types/${type_slug}/${id}`;

  
  return (
    <div className="p-2 mt-3"> 
      <div className="vfx-single-team-member vfx-cat-item vfx2 shadow-sm rounded py-4"> 
        <a href={link} title={type_name}>
          <Image type_image={`storage/${type_image}`} type_name={type_name} style={{ width: '250px', height: '150px', objectFit: 'cover' }} className={"img-fluid"}  />
        </a>
        <div className="vfx-single-team-info p-3 text-center">
          <h4 className="mb-0">
            <a href={link} title={type_name} className="text-dark text-decoration-none fw-bold">{type_name}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;