import PropertyCard from '../Card/PropertyCard';
import { SectionHeader } from './SectionHeader';
import '../../assets/styles/global.css';
import '../../assets/styles/property.css';
// --- Reusable Property List Section ---
export const PropertyListSection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '' }) => {
  const { property, propLoading, properror } = list || [];

  return (
    <div className={`vfx-trending-places bg-white py-5 ${sectionClass}`}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4">
          <div className="col-12">
            <SectionHeader title={title} viewAllLink={viewAllLink} viewAllTitle="View All" />
          </div>
        </div>

        {/* Property Cards */}
        <div className="row g-4">
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
