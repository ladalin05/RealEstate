import React from 'react';
import { SectionHeader } from '../components/Section/SectionHeader';
import { PropertyListSection } from '../components/Section/PropertyListSection';
import CategoryItem from '../components/Card/CategoryItem';
import HeroSection from '../components/Section/HeroSection';
import '../assets/styles/global.css';
import '../assets/styles/property.css';


const HomePage = ({properties, categories}) => {
  const { property, propLoading, properror } = properties;
  const { category, loading, error } = categories;

  const trending = property?.filter((item) => {
      const postDate = new Date(item.post_date);
      const currentDate = new Date();
      const Days = (currentDate - postDate) / (1000 * 60 * 60 * 24);
      return Days <= 30 && Days >= 0 && item.post_views > 0;
  });

  const trendingList = { property: trending, propLoading, properror};

  return (
    <div className="homepage-content">
      <div>
        <HeroSection />
      </div>

      {/* Property Category Section */}
      <div className="vfx-team-section-area bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeader title="Property Type" viewAllLink="/types" viewAllTitle="View All" />
            </div>
            <div className="col-12">
              <div className="vfx-team-wrapper d-flex justify-content-center custom-scrollbar">
                { loading ? (
                  <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : !error && category && category.length > 0 ? (
                  category.map((type_data) => (
                    <CategoryItem key={type_data.id} type={type_data} />
                  ))
                ) : (
                  !loading && !error && <p>No categories found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      {trending && trending.length > 0 && (
        <PropertyListSection title="Trending Now" list={trendingList} viewAllLink="/popular"
          sectionClass="trending-property-section bg-light" paginationClass="vfx-popular-property-pagination" />
      )}
      
      {/* Latest Property Section */}
      <PropertyListSection title="Latest Property" list={properties} viewAllLink="/latest"
          sectionClass="latest-property-section" paginationClass="vfx-latest-property-pagination"
      />

    </div>
  );
};

export default HomePage;
