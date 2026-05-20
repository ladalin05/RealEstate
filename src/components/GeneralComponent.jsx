import React from 'react'
import config from '../config'

export const Image = ({type_image, type_name, defaultImage, style, className}) => { 
  return (
      <>
        <img 
            src={type_image ?  `${config.app.url.replace(/\/+$/,'')}/${type_image.replace(/^\/+/,'')}` : defaultImage} 
            alt={type_name || 'Image'} 
            className={className}
            style={style} />
    </>
    )
}