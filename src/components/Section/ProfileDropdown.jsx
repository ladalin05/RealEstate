import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from "../../core/api/authApi";
import { Image } from '../GeneralComponent';


export const ProfileDropdown = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const defaultUserImage = 'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg';
  const navigate = useNavigate();
  const user_image = user?.image != null ? user.image.replace("http://127.0.0.1:8000/storage", '') : null;
  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/home");
    window.location.reload();
  };
  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button className="btn btn-link p-3 text-dark d-flex align-items-center dropdown-toggle" type="button" id="userDropdown" 
        aria-haspopup="true" aria-expanded={isDropdownOpen} onClick={toggleDropdown} style={{ textDecoration: 'none' }}
      >
        <a href='#' className="property-author d-flex align-items-center justify-content-center text-dark text-decoration-none" title="user profile"> 
          <img  src={user_image ? user.image : defaultUserImage} alt="user_image" 
                className="rounded-circle m-auto border border-secondary" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
          <span className="d-none d-md-inline ms-3" style={{ fontSize: '18px', color:'#7b7977' }}>
            {user?.name || 'User'}
          </span>
        </a>
        <i className={`fas fa-drop-down ms-2 ${isDropdownOpen ? 'open' : ''}`} style={{ color:'#7b7977' }}></i>
      </button>

      <div className={`dropdown-menu dropdown-menu-right user-dropdown-custom ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="userDropdown" >
          <Link className="dropdown-item d-flex align-items-center" to="/profile" onClick={() => setIsDropdownOpen(false)} >
              👤 View Profile
          </Link>
          <Link className="dropdown-item d-flex align-items-center" to="/settings" onClick={() => setIsDropdownOpen(false)} >
              ⚙️ Account Settings
          </Link>
          <Link className="dropdown-item d-flex align-items-center" to="/favourites" onClick={() => setIsDropdownOpen(false)} >
              ❤️ Favourite Properties
          </Link>
          <Link className="dropdown-item d-flex align-items-center">
            <button  style={{ color: '#dc3545', background: 'none', border: 'none', padding: 0, textAlign: 'left', }}
                onClick={handleLogout}>
              🚪 Logout
            </button>
          </Link>
      </div>
    </div>
  );
};