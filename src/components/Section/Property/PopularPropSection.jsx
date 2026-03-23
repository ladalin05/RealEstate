import { useEffect, useState } from 'react';
import PopularCard from '../../Card/PopularCard';
import PropertyCard from '../../Card/PropertyCard';
import { SectionHeader } from '../SectionHeader';
// --- Reusable Property List Section ---
export const PopularPropSection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '' }) => {
  const { property, propLoading, properror } = list || [];
  const [purpose, setPurpose] = useState("rent");

  const properties = (property || []).filter(p => p.purpose === purpose).slice(0, 4);

  return (
    <div className={`vfx-trending-places py-5 ${sectionClass}`}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-offset="900">
            <div className="section-title vid-item-section mb-3 d-flex justify-content-between align-items-center">
              <h2>{title}</h2>
              <div className="d-flex">
                <button type="button" className={`button-for me-2 ${purpose === "rent" ? "button-active" : ""}`} onClick={() => setPurpose("rent")}>
                  For Rent
                </button>
                <button type="button" className={`button-for ${purpose === "sale" ? "button-active" : ""}`} onClick={() => setPurpose("sale")}>
                  For Sale
                </button>
              </div>
            </div>
        </div>

        {/* Property Cards */}
        <div className="w-100 overflow-x-hidden mb-5" data-aos="fade-up" data-aos-delay="300" data-aos-offset="900">
          <div className=" d-flex overflow-x-auto hide-scrollbar">
            { propLoading ? (
                  <div className="col-12 text-center text-muted">
                      <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                  </div>
            ) : !properror && properties && properties.length > 0 ? (
                  properties.map((property) => (
                    <div key={property.id} className="col-lg-3 col-md-4 col-sm-12" >
                      <PopularCard property={property} />
                    </div>
                  ))
            ) : (
              <div className="col-12 text-center text-muted">No properties found.</div>
            )}
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="section-title vid-item-section mb-3 d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <button type="button" className="btn btn-primary" onClick={() => setPurpose("rent")}>
                  <span style={{fontSize: '15px'}}>See All Properties</span>
                  <i className="fa-regular fa-arrow-right-long ms-2" style={{fontSize: '16px', transform: 'rotate(-45deg)'}}></i>
                </button>
              </div>
            </div>
        </div>

        {/* Pagination */}
        {paginationClass && (
          <div className={`${paginationClass} mt-4 text-center`}>
            {/* Pagination UI/logic placeholder */}
          </div>
        )}
      </div>
    </div>
  );
};
