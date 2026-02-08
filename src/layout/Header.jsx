import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Image } from '../components/GeneralComponent';
import { ProfileDropdown } from '../components/Section/ProfileDropdown';
import '../assets/styles/header.css';

const Header = ({ navigationLinks, isLoggedIn = true}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = Array.isArray(navigationLinks) ? navigationLinks : [];
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header scroll-hide" style={{backgroundColor: "#fff"}} >
      <div className="vfx-site-navbar-area vfx2">
        <div className="container">
          <div className="site-navbar">
            <div className="row align-items-center justify-content-between">
              {/* Logo */}
              <div className="col-6 col-md-4 col-lg-2">
                <Link to="/" title="logo" className="navbar-brand">
                  <Image type_image="assets/images/default/site_logo.png" type_name="Icon" className={"img-fluid"} />
                </Link>
              </div>

              {/* Navigation Menu for desktop */}
              <div className="col-lg-7 d-none d-lg-block">
                <nav className="site-navigation text-center d-flex justify-content-center">
                  <ul className="site-menu">
                    {links.length > 0 ? (
                      links.map((link) => (
                        <li key={link.id}>
                          <NavLink
                            to={link.page_slug || '#'}
                            className={({ isActive }) =>
                              isActive ? 'active nav-link' : 'nav-link'
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.page_title || 'Untitled'}
                          </NavLink>
                        </li>
                      ))
                    ) : (
                      <li className="text-muted">No links available</li>
                    )}
                  </ul>
                </nav>
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-right d-none d-lg-block">
                {isLoggedIn ? (
                  <ProfileDropdown user={user} />
                ) : (
                  <Link to="/login" className="btn btn-sm btn-primary login-btn">
                    <i className="fas fa-sign-in-alt mr-2"></i> Login
                  </Link>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="col-6 d-block d-lg-none text-right">
                <button
                  className="navbar-toggler mobile-menu-toggler"
                  type="button"
                  onClick={toggleMobileMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mobile-menu d-lg-none mt-2">
                <ul className="site-menu">
                  {links.length > 0 ? (
                    links.map((link) => (
                      <li key={link.id}>
                        <NavLink
                          to={link.page_slug || '#'}
                          className={({ isActive }) =>
                            isActive ? 'active nav-link' : 'nav-link'
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.page_title || 'Untitled'}
                        </NavLink>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">No links available</li>
                  )}
                  {isLoggedIn ? (
                       <li >
                        <Link to="/" className="nav-link"
                          onClick={() => setIsMobileMenuOpen(false)} >
                          👤 View Profile
                        </Link>
                      </li>
                  ) : (
                    <li>
                      <Link
                        to="/login"
                        className="btn btn-sm btn-primary login-btn mt-2 d-block text-center"
                      >
                        <i className="fas fa-sign-in-alt mr-2"></i> Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;