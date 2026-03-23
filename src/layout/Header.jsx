import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Image } from '../components/GeneralComponent';
import { ProfileDropdown } from '../components/Section/Home/ProfileDropdown';

const Header = ({ navigationLinks, isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = Array.isArray(navigationLinks) ? navigationLinks.filter(link => link.slug.toLowerCase() === "main-menu") : [];
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const handleScroll = () => {if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'header-active' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Brand Logo */}
          <Link to="/home" className="navbar-brand">
            <Image 
              type_image="assets/images/default/site_logo.png" 
              type_name="Icon" 
              className="logo-img" 
            />
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler border-0" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              {links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <NavLink 
                    to={link.menu_link || '#'} 
                    className="nav-link px-3"
                  >
                    {link.menu_title}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Right Side / Auth */}
            <div className="nav-auth-buttons d-flex align-items-center">
              {isLoggedIn ? (
                <ProfileDropdown user={user} />
              ) : (
                <Link to="/login" className="btn btn-signin rounded-pill px-4">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;