import React from 'react'
import '../../assets/styles/hero.css';

export const BannerSection = ({sectionImage, section_title, currentPage }) => {
  return (
    <div className="hero-section position-relative py-5 d-flex align-items-center" 
         style={{ 
             backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sectionImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             minHeight: '300px'
         }}>
        <div className="container text-center text-white">
            <h1 className="display-4 fw-bold mb-3">{section_title}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/" className="text-white opacity-75 text-decoration-none">Home</a></li>
                    <li className="breadcrumb-item active text-white fw-bold" aria-current="page">{currentPage}</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}