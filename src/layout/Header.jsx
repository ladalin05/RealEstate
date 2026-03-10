import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Image } from '../components/GeneralComponent';
import { ProfileDropdown } from '../components/Section/ProfileDropdown';
import '../assets/styles/layout.css';

const Header = ({ navigationLinks, isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = Array.isArray(navigationLinks) ? navigationLinks : [];
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Image type_image="assets/images/default/site_logo.png" type_name="Icon" className={"logo-img"} />
        </Link>

        <button className="navbar-toggler border-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <NavLink to={link.page_slug || '#'} className="nav-link px-3">
                  {link.page_title}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="nav-auth-buttons">
            {isLoggedIn ? (
              <ProfileDropdown user={user} />
            ) : (
              <Link to="/login" className="btn btn-primary rounded-pill px-4 shadow-sm">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;