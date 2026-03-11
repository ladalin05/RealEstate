import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from "../../core/api/authApi";
import '../../assets/styles/profile.css';

export const ProfileDropdown = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const defaultUserImage = 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg';

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/home");
    window.location.reload();
  };

  return (
    <div className="profile-dropdown-container">
      <button 
        className="btn btn-profile-toggle d-flex align-items-center" 
        onClick={toggleDropdown}
      >
        <img 
          src={user?.image || defaultUserImage} 
          alt="Profile" 
          className="rounded-circle profile-avatar" 
        />
        <span className="user-name d-none d-md-inline ms-2">{user?.name || 'User'}</span>
        <i className={`fas fa-chevron-down ms-2 transition-icon ${isDropdownOpen ? 'rotate' : ''}`}></i>
      </button>

      <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
        <div className="dropdown-header px-3 py-2">
            <small className="text-muted">Account</small>
        </div>
        <Link className="dropdown-item" to="/profile" onClick={() => setIsDropdownOpen(false)}>
            <i className="fas fa-user me-2"></i> View Profile
        </Link>
        <Link className="dropdown-item" to="/settings" onClick={() => setIsDropdownOpen(false)}>
            <i className="fas fa-cog me-2"></i> Account Settings
        </Link>
        <Link className="dropdown-item" to="/favourites" onClick={() => setIsDropdownOpen(false)}>
            <i className="fas fa-heart me-2"></i> Favourites
        </Link>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item text-danger" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> Logout
        </button>
      </div>
    </div>
  );
};