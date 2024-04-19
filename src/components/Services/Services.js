import React from 'react';
import "./Services.css";
import { sec1, sec2 } from '../../assets';

const Services = () => {
  return <section id='services'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 col-md-5 col-lg-6 image'>
          <img src={sec1} className='img-fluid' alt='web-n-mobile-app-development' />
        </div>
        <div className='col-sm-12 col-md-7 col-lg-6 details'>
          <h2>Web & Mobile App Development</h2>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <a href='#'>LEARN MORE</a>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-7 col-lg-6 details'>
          <h2>Digital Strategy Consulting</h2>
          <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <a href='#'>LEARN MORE</a>
        </div>
        <div className='col-sm-12 col-md-5 col-lg-6 image'>
          <img src={sec2} className='img-fluid' alt='digital-strategy-consulting' />
        </div>
      </div>
    </div>
  </section>;
};

export default Services;