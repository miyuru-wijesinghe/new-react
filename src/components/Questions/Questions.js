import React from 'react';
import "./Questions.css";
import Faq from '../Faq/Faq';

const Questions = () => {
  return <section id='questions'>
    <div className='container-fluid'>
      <div className='row'>
        <h2>Frequently asked questions</h2>
      </div>
      <div className='row'>
        <Faq />
      </div>
    </div>
  </section>;
};

export default Questions;