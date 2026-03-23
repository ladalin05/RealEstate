import PropertyCard from '../../Card/PropertyCard';
import { SectionHeader } from '../SectionHeader';
import CityImage from '../../../assets/images/city-listing.jpg'
import { Image } from '../../GeneralComponent';
import { useEffect } from 'react';
// --- Reusable Property List Section ---
export const PropByCitySection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '' }) => {

  const { cities, cityLoading, cityError } = list || [];

  return (
    <div className={`vfx-trending-places py-5 ${sectionClass}`}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
          <div className="col-12">
            <SectionHeader title={title} viewAllLink={viewAllLink} viewAllTitle="See All Cities" />
          </div>
        </div>

        {/* Property Cards */}
        <div className="w-100 position-relative overflow-x-hidden" data-aos="fade-up" data-aos-delay="300" data-aos-offset="500">
            <div className="rounded-arrow arrow-center-position">
              <button className="property-by-city-prev swiper_button">
                <i className="far fa-chevron-left"></i>
              </button>
              <button className="property-by-city-next swiper_button">
                <i className="far fa-chevron-right"></i>
              </button>
            </div>
          <div className="d-flex overflow-x-auto hide-scrollbar">
              { cityLoading ? (
                    <div className="col-12 text-center text-muted">
                        <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
              ) : !cityError && cities && cities.length > 0 ? (
                    cities.map((city) => (
                      <div key={city.id} className="feature-prop position-relative" style={{ width: '260px' }}>
                        <div className="top-area text-white">
                          <h6 className="mb-1 fw-bold">{city.city_name}</h6>
                          <p className="text fw-semibold">{city.property_count} Properties</p>
                        </div>

                        <div className="bottom-details">
                          <a href="/cities" className="bottom-link fw-bold text-white text-decoration-none">
                            See All Cities <i className="fa-regular fa-arrow-right-long ms-2" style={{fontSize: '16px', transform: 'rotate(-45deg)'}}></i>
                          </a>
                        </div>

                        <div className="feature-image">
                          <Image type_image={city.city_image ? `storage/`+city.city_image : null} type_name={city.city_name} defaultImage={CityImage}  />
                        </div>
                      </div>
                    ))
              ) : (
                <div className="col-12 text-center text-muted">No properties found.</div>
              )}
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
