import React from 'react';
import "./Footer.css";
import { logo } from '../../assets/index';

const Footer = () => {
  return <footer>
    <div className='container-fluid'>
      <div className='row'>
        <div className='about col-sm-12 col-md-12 col-lg-6'>
          <a href=''>
            <img src={logo} className='footer-logo' alt='at-digital' />
          </a>
          <p>Your goal is our target. Not anything in between. We use <br className='d-none d-md-block' />
            online marketing platforms and tools to achieve single <br className='d-none d-md-block' />
            objective - your business results.</p>
        </div>
        <div className='technologies col-sm-12 col-md-6 col-lg-3'>
          <h3>Our Technologies</h3>
          <ul>
            <li><a href='#'>ReactJS</a></li>
            <li><a href='#'>Gatsby</a></li>
            <li><a href='#'>NextJS</a></li>
            <li><a href='#'>NodeJS</a></li>
          </ul>
        </div>
        <div className='services col-sm-12 col-md-6 col-lg-3'>
          <h3>Our Services</h3>
          <ul>
            <li><a href='#'>Social media Marketing</a></li>
            <li><a href='#'>Web & Mobile App <br className='d-none d-xl-block' />
              Development</a></li>
            <li><a href='#'>Data & Analytics</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='bottom'>
        <p><a href='#'>Privacy Policy</a></p>
        <p><a href='#'>Terms & Conditions</a></p>
      </div>
    </div>
  </footer>;
};

export default Footer;