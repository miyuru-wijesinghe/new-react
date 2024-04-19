import React, { useState } from 'react';
import "./Navbar.css";
import { logo, open, close } from "../../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <div className='container-fluid'>
          <a href='#'>
            <img src={logo} className='logo' alt='at-digital' />
          </a>
          <ul>
            <li><a href='#'>SERVICES</a></li>
            <li><a href='#'>ABOUT US</a></li>
            <li><a href='#'>CONTACT US</a></li>
            <li><a href='#'>CAREERS</a></li>
          </ul>
        </div>
        <div onClick={() => setIsActive(true)} className='menu-icon'>
          <img src={open} className='open' alt='open' />
        </div>
      </nav>

      <div className={`mobile-menu ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className='close-icon'>
          <img src={close} className='close' alt='close' />
        </div>
        <ul>
          <li><a href='#' onClick={() => setIsActive(false)}>HOME</a></li>
          <li><a href='#' onClick={() => setIsActive(false)}>SERVICES</a></li>
          <li><a href='#' onClick={() => setIsActive(false)}>ABOUT US</a></li>
          <li><a href='#' onClick={() => setIsActive(false)}>CONTACT US</a></li>
          <li><a href='#' onClick={() => setIsActive(false)}>CAREERS</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
