import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.jpeg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
        <span>Travels</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/Packing" onClick={closeMenu}>Package</Link></li>
        <li><Link to="/About" onClick={closeMenu}>About</Link></li>
        <li className="dropdown" onClick={toggleDropdown}>
          <Link to="/Pages">
            Destinations <i className="fa fa-caret-down"></i>
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>North India</h4>
                <ul>
                  <li><a href="/">Rajasthan</a></li>
                  <li><a href="/">MP</a></li>
                  <li><a href="/">Uttarakhand</a></li>
                  <li><a href="/">UP</a></li>
                  <li><a href="/">Haryana</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>South India</h4>
                <ul>
                  <li><a href="/">Karnataka</a></li>
                  <li><a href="/">Kerala</a></li>
                  <li><a href="/">Tamil Nadu</a></li>
                  <li><a href="/">Andhra Pradesh</a></li>
                  <li><a href="/">Kolkata</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>East India</h4>
                <ul>
                  <li><a href="/">Sikkim</a></li>
                  <li><a href="/">Assam</a></li>
                  <li><a href="/">Nagaland</a></li>
                  <li><a href="/">Tripura</a></li>
                  <li><a href="/">Delhi</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>West India</h4>
                <ul>
                  <li><a href="/">Goa</a></li>
                  <li><a href="/">Gujarat</a></li>
                  <li><a href="/">Maharashtra</a></li>
                  <li><a href="/">Daman</a></li>
                  <li><a href="/">Dadra</a></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
      <button className="purchase-but">
        <Link to="/Book">Book Now</Link>
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </nav>
  );
};

export default Navbar;
