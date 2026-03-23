import PropertyCard from '../../Card/PropertyCard';
import { SectionHeader } from '../SectionHeader';
// --- Reusable Property List Section ---

export const PropertySection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '', propLoading }) => {
  const properties = list || [];

  return (
    <section className={`vfx-trending-places py-5 ${sectionClass}`}>
      <div className="container">
        
        {/* Header & Controls */}
        <div className="row bg-white align-items-center property g-3 p-3 mb-4 shadow-sm">
          <div className="col-lg-6 col-md-6 col-12">
            <h5 className="m-0 text-dark fw-bold">{title || "Available Properties"}</h5>
            <small className="text-muted">Showing 1-10 of 24 results</small>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-md-end gap-3">
             <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown">
                  Sort by Newest
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item">Newest</a></li>
                  <li><a className="dropdown-item">Price: High to Low</a></li>
                </ul>
             </div>
             <div className='d-flex align-items-center item-filter-list'>
                <a className='mx-2'><i className="fa-solid fa-list fs-5"></i></a>
                <a className='mx-2'><i className="fa-solid fa-grip fs-5"></i></a>
             </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="row g-4 justify-content-center">
          {propLoading ? (
            <div className="spinner-container">
                <div className="spinner-border text-primary" role="status" />
            </div>
          ) : properties.length > 0 ? (
            properties.map((property) => (
              <div key={property.id} className="col-lg-4 col-md-6 col-sm-12">
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <div className="text-center py-5">
                <p className="text-muted">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
