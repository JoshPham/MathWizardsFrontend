import React, { useState } from 'react';
import './NavbarStyles.css';
import logo from './logo192.png';
import menuIcon from './menu-icon.png'; // Replace with your menu icon image

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isGradesDropdownOpen, setGradesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setGradesDropdownOpen(false); // Close the Grades dropdown when toggling the menu
  };

  const toggleGradesDropdown = (e) => {
    if (!isGradesDropdownOpen) {
      e.preventDefault(); // Prevent the default link behavior only if the dropdown is closed
    }
    setGradesDropdownOpen(!isGradesDropdownOpen);
  };

  const closeGradesDropdown = () => {
    setGradesDropdownOpen(false);
  };

  return (
    <>
      <nav className={isMenuOpen ? 'mobile-menu-open' : ''}>
        <div className="logo">
          <div className="logo-elements">
            <a href="/">
              <img src={logo} alt="LOGO" />
              <span>Math Wizards</span>
            </a>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li>
            <span onClick={toggleGradesDropdown}>
              {window.innerWidth > 768 ? (
                <a href="/grades/">Grades ⮟</a>
              ) : (
                <span className='grades'><a>Grades ⮟</a></span>
              )}
              {isGradesDropdownOpen && (
                <ul className="dropdown" onClick={closeGradesDropdown}>
                  <li><a href="/grades/0/">Kindergarten</a></li>
                  <li><a href="/grades/1/">First Grade</a></li>
                  <li><a href="/grades/2/">Second Grade</a></li>
                  <li><a href="/grades/3/">Third Grade</a></li>
                  <li><a href="/grades/4/">Fourth Grade</a></li>
                  <li><a href="/grades/5/">Fifth Grade</a></li>
                  {window.innerWidth <= 768 && <li><a href="/grades/">View All Grades</a></li>}
                </ul>
              )}
            </span>
          </li>
          <li><a href="/help/">Help Desk</a></li>
          <li><a href="/login/">Login</a></li>
          <li><a href="/register/">Register</a></li>
          <li><a href="/settings/">Settings</a></li>
        </ul>
      </nav>
    </>
  );
}
