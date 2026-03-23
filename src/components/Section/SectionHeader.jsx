import React from 'react';


// --- Section Header Component ---
export const SectionHeader = ({ title, viewAllLink, viewAllTitle = "View All" }) => (
  <div className="section-title vid-item-section mb-3 d-flex justify-content-between align-items-center">
    <h2>{title}</h2>
    <span className="view-more">
      <a href={viewAllLink} title={viewAllTitle} className="text-decoration-none d-flex align-items-center text-dark fw-bold">
        <span style={{fontSize: '15px'}}>{viewAllTitle}</span>
        <i className="fa-regular fa-arrow-right-long ms-2" style={{fontSize: '16px', transform: 'rotate(-45deg)'}}></i>
      </a>
    </span>
  </div>
);

