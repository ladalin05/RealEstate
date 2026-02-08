import React from 'react'
import '../../assets/styles/hero.css';

export const BannerSection = ({sectionImage, section_title, currentPage }) => {
  return (
        <div className="hero-section bg-cover bg-xs" style={{ backgroundImage: `url(${sectionImage})` }}>
            <div className="overlay op-5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center">
                        <div className="hero-content">
                            <h1 className="hero-title">{section_title}</h1>
                            <p className="hero-subtitle">{`Home / ${currentPage}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}