import React from 'react'

export const Image = ({type_image, type_name, defaultImage, style, className}) => { 
  console.log(type_image ? `http://127.0.0.1:8000/${type_image}` : defaultImage)
  return (
      <>
        <img 
            src={type_image ? `http://127.0.0.1:8000/${type_image}` : defaultImage} 
            alt={type_name || 'Image'} 
            className={className}
            style={style} />
    </>
    )
}