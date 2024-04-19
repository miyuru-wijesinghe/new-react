import React from 'react';
import './Faq.css';

const Faq = () => {
    return <div className="accordion" id="accordion-1">
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </button>
            </h3>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                </button>
            </h3>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                    <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                </button>
            </h3>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                <div className="accordion-body">
                    <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Faq;