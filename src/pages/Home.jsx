import React from 'react';
import { SectionHeader } from '../components/Section/SectionHeader';
import { PropertyListSection } from '../components/Section/PropertyListSection';
import { PropertyOneSection } from '../components/Section/PropertyOneSection';
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

      <section className="apartment-section py-4 pt-5 bg-white pb-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <div>
              <h2 className="section-title">Explore Apartment Types</h2>
              <p className="section-subtitle">Get some inspirations from 1800+ skills</p>
            </div>
          </div>
          {/* Categories Grid */}
          <div className="category-body">
            <div className="category-grid">
              {category?.map(t => <CategoryItem key={t.id} type={t} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section-padding bg-light">
         <PropertyOneSection 
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
