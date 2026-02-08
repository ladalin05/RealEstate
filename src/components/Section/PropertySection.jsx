import PropertyCard from '../Card/PropertyCard';
import { SectionHeader } from './SectionHeader';
import '../../assets/styles/global.css';
// --- Reusable Property List Section ---
export const PropertySection = ({ title, list, viewAllLink, sectionClass = '', paginationClass = '', propLoading }) => {
  const properties = list || [];

  return (
    <div className={`vfx-trending-places py-5 ${sectionClass}`}>
      <div className="container">
        <div className="row bg-light align-items-center property g-4 p-3 my-3">
          <div className="col-lg-6 col-sm-6 col-12 my-auto">
              <a className='my-auto' >Showing <span>1-10</span> of <span>24</span> Properties</a>
          </div>
          <div className="col-lg-4 col-sm-4 col-12 my-auto">
            <div name="" id="sort_by" className="dropdown nice-select form-control">
              <span className="current dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort by Newest
              </span>
              <ul className="list dropdown-menu">
                <li className="dropdown-item option">Sort by Newest </li>
                <li className="dropdown-item option">Sort by Oldest</li>
                <li className="dropdown-item option">Sort by Price(High to Low)</li>
                <li className="dropdown-item option">Sort by Price(Low to High)</li>
              </ul>
            </div>
          </div>
          <div className='col-2 d-flex justify-content-end item-filter-list my-auto'>
            <a className='mx-2'><i className="fa-solid fa-list"></i></a>
            <a className='mx-3'><i className="fa-solid fa-grip"></i></a>
          </div>
        </div>

        {/* Property Cards */}
        <div className="row g-4 justify-content-center">
          { propLoading ? (
                <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                  <span className="visually-hidden">Loading...</span>
                </div>
          ) : properties.length > 0 ? (
                properties.map((property) => (
                  <div key={property.id} className="col-lg-6 col-md-6 col-sm-12" >
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
