import React from 'react';
import './NavbarStyles.css';
import logo from './logo192.png';


export default function Navbar() {
  return (
    <>
      <nav>
        <div class="logo">
          <div class="logo-elements">
            <a href="/">
              <img src={logo} alt="LOGO" />
              <span>Math Wizards</span>
            </a>
           
            <div class="item-2"></div>
          </div>
        </div>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li>
            <a href="/grades/" id="grade">Grades ⮟</a>
            <ul className="dropdown">
              <li><a href="/grades/0/">Kindergarten</a></li>
              <li><a href="/grades/1/">First Grade</a></li>
              <li><a href="/grades/2/">Second Grade</a></li>
              <li><a href="/grades/3/">Third Grade</a></li>
              <li><a href="/grades/4/">Fourth Grade</a></li>
              <li><a href="/grades/5/">Fifth Grade</a></li>
            </ul>
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
