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
      <HeroSection />

      {/* Categories: Using a slider or centered grid */}
      <section className="py-5 bg-white shadow-sm position-relative" style={{ marginTop: '-40px', zIndex: 10, borderRadius: '40px 40px 0 0' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
             <h3 className="fw-bold mb-0">Browse by Category</h3>
             <a href="/types" className="btn btn-outline-primary btn-sm rounded-pill px-4">See All</a>
          </div>
          <div className="vfx-team-wrapper d-flex justify-content-around overflow-auto pb-3 gap-4">
              {category?.map(t => <CategoryItem key={t.id} type={t} />)}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section-padding bg-light">
         <PropertyListSection 
            title="Trending Now 🔥" 
            list={trendingList} 
            viewAllLink="/popular"
            sectionClass="trending-section" 
         />
      </section>

      {/* Latest Properties */}
      <section className="section-padding bg-white">
         <PropertyListSection 
            title="Newly Listed" 
            list={properties} 
            viewAllLink="/latest"
            sectionClass="latest-section" 
         />
      </section>
    </div>
  );
};

export default HomePage;
