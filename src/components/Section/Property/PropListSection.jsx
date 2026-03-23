import { useEffect } from 'react';
import PropertyCard from '../../Card/PropertyCard';
import { SectionHeader } from '../SectionHeader';
// --- Reusable Property List Section ---
export const PropListSection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '' }) => {
  const { property, propLoading, properror } = list || [];


  return (
    <div className={`vfx-trending-places py-5 ${sectionClass}`}  data-aos="fade-up" data-aos-delay="300">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12">
            <SectionHeader title={title} viewAllLink={viewAllLink} viewAllTitle="See All Properties" />
          </div>
        </div>

        {/* Property Cards */}
        <div className="w-100 overflow-x-hidden" data-aos="fade-up"  data-aos-delay="200">
          <div className=" d-flex overflow-x-auto hide-scrollbar">
            { propLoading ? (
                  <div className="col-12 text-center text-muted">
                      <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                  </div>
            ) : !properror && property && property.length > 0 ? (
                  property.map((property) => (
                    <div key={property.id} className="col-lg-4 col-md-6 col-sm-12" >
                      <PropertyCard property={property} />
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
