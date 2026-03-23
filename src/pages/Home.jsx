import React, { useEffect } from 'react';
import { PropertyOneSection, PropListSection } from '../components/Section/Property/PropListSection';
import CategoryItem from '../components/Card/CategoryItem';
import HeroSection from '../components/Section/Home/HeroSection';
import { PropByCitySection } from '../components/Section/Property/PropByCitySection';
import { PopularPropSection } from '../components/Section/Property/PopularPropSection';
import { BlogSection } from '../components/Section/Home/BlogSection';
import { Telephone } from 'react-bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = ({properties, categories, city_property}) => {
  const { property, propLoading, properror } = properties;
  const { category, loading, error } = categories;
  const { cities, cityLoading, cityError } = city_property;
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      offset: 200,
      once: true
    });
  }, []);

  const trending = property?.filter((item) => {
      const postDate = new Date(item.post_date);
      const currentDate = new Date();
      const Days = (currentDate - postDate) / (1000 * 60 * 60 * 24);
      return Days <= 30 && Days >= 0 && item.post_views > 0;
  });

  const city_prop = {cities: cities, cityLoading, cityError};

  const trendingList = { property: trending, propLoading, properror};
  const logos = [
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'AMD', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg' },
    { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Dropcam', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Dropcam_logo.svg' },
    { name: 'Logitech', url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg' },
    { name: 'Spotify', url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg' }
  ];

  return (
    <div className="homepage-content">
      <HeroSection />

      <section className="apartment-section py-4 pt-5 bg-white pb-5" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <div>
              <h2 className="section-title">Explore Apartment Types</h2>
              <p className="section-subtitle">Get some inspirations from 1800+ skills</p>
            </div>
          </div>
          {/* Categories Grid */}
          <div className="category-body" data-aos="fade-up" data-aos-delay="200">
            <div className="category-grid">
              {category?.map(t => <CategoryItem key={t.id} type={t} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section-padding bg-light">
         <PropListSection 
            title="Discover Our Featured Listings" 
            list={trendingList} 
            viewAllLink="/popular"
            sectionClass="trending-section" 
         />
      </section>

      <section className="section-padding bg-white">
         <PropByCitySection 
            title="Properties by Cities" 
            list={city_prop} 
            viewAllLink="/popular"
            sectionClass="trending-section" 
         />
      </section>

      <section className="hero-container py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            
            {/* Left Content Side */}
            <div className="col-lg-5 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300" data-aos-offset="800">
              <h6 className="display-4 fw-bold text-dark mb-4" style={{fontSize: '28px'}}>
                Let's find the right <br /> selling option for you
              </h6>
              <p className="lead text-muted mb-4 fs-6">
                As the complexity of buildings to increase, the field of architecture 
                continues to evolve with innovative solutions.
              </p>

              <ul className="list-unstyled mb-5">
                <li className="d-flex align-items-center mb-3 fw-semibold">
                  <span className="check-icon me-3">✓</span> Find excellent deals
                </li>
                <li className="d-flex align-items-center mb-3 fw-semibold">
                  <span className="check-icon me-3">✓</span> Friendly host & Fast support
                </li>
                <li className="d-flex align-items-center mb-3 fw-semibold">
                  <span className="check-icon me-3">✓</span> List your own property
                </li>
              </ul>

              <button className="btn btn-outline-dark px-5 py-3 rounded-3 fw-bold">
                Learn More <span className="ms-2">↗</span>
              </button>
            </div>

            {/* Right Image Composition Side */}
            <div className="col-lg-7 position-relative hero-image-wrapper" data-aos="fade-right" data-aos-delay="300" data-aos-offset="800">
              
              {/* Main Large Image (Right) */}
              <div className="main-image-box shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                  alt="Couple"
                  className="img-fluid"
                />
              </div>

              {/* Floating Architecture Image (Bottom-Left) */}
              <div className="floating-image-box shadow shadow-intensity">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" 
                  alt="House"
                  className="img-fluid"
                />
              </div>

              {/* Agents Badge */}
              <div className="agents-badge shadow p-4 bg-white rounded-4">
                <p className="fw-bold text-dark mb-2">10k+ Exclusive Agents</p>
                <div className="d-flex align-items-center">
                  <div className="avatar-group d-flex">
                      <img src="https://i.pravatar.cc/100?u=1" alt="agent" />
                      <img src="https://i.pravatar.cc/100?u=2" alt="agent" />
                      <img src="https://i.pravatar.cc/100?u=3" alt="agent" />
                      <div className="plus-circle">+</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-white" style={{backgroundColor: '#181a20'}}>
          <PopularPropSection 
            title="Discover Popular Properties" 
            list={trendingList} 
            viewAllLink="/popular"
            sectionClass="trending-section" 
          />
      </section>

      <section className="section-padding text-white bg-white">
          <BlogSection />
      </section>

      <section className="section-padding text-white bg-white">
        <div className="container pb-5 pt-2">
          <p className="text-center text-black fw-bold"  data-aos="fade-up" data-aos-delay="200" data-aos-offset="1200">Trusted by the world’s best</p>
          <div className="w-100 overflow-x-hidden"  data-aos="fade-up" data-aos-delay="200" data-aos-offset="1200">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="row d-flex align-items-center justify-content-around g-4 mt-3">
                {logos.map((logo, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-2 text-center">
                    <div className="logo-wrapper">
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        style={{maxHeight: '35px'}}
                        className="img-fluid brand-logo" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-white bg-white" style={{padding: '60px 0px 100px 0px'}}>
        <div className="container bg-light rounded" data-aos="fade-up" data-aos-delay="200" data-aos-offset="1400">
          <div className="cta-banner" style={{padding: '7rem'}}>
            <div className="row align-items-center">
              {/* Text Content */}
              <div className="col-lg-7 mb-4 mb-lg-0"  data-aos="fade-right" data-aos-delay="200" data-aos-offset="1400">
                <h2 className="fw-bold text-black mb-3">
                  Need help? Talk to our expert.
                </h2>
                <p className="text-muted mb-0 lead-sm">
                  Talk to our experts or Browse through more properties.
                </p>
              </div>

              {/* Buttons Group */}
              <div className="col-lg-5 d-flex justify-content-end gap-3" data-aos="fade-left" data-aos-delay="200" data-aos-offset="1400">
                <a href="#contact" className="btn btn-outline-dark py-2 px-3 d-flex align-items-center fw-bold rounded-3">
                  Contact Us <span className="ms-2">↗</span>
                </a>
                <a href="tel:9208519087" className="btn btn-dark py-2 px-3 d-flex align-items-center rounded-3">
                  <Telephone className="me-2" /> 920 851 9087
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
