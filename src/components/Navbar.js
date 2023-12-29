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
              <li><a href="/kindergarten/">Kindergarten</a></li>
              <li><a href="/firstgrade/">First Grade</a></li>
              <li><a href="/secondgrade/">Second Grade</a></li>
              <li><a href="/thirdgrade/">Third Grade</a></li>
              <li><a href="/fourthgrade/">Fourth Grade</a></li>
              <li><a href="/fifthgrade/">Fifth Grade</a></li>
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
