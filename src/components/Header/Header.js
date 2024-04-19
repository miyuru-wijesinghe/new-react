import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className='container-fluid'>
          <div className='container'>
              <div className='caption'>
                <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
                <Button />
              </div>
          </div>
        </div>
      </header>
        <div className='caption small'>
          <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
          <Button />
        </div>
    </>
  );
};

export default Header;
