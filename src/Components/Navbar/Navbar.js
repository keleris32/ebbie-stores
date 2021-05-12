import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="hamburger-con">
        <div className="hamburger" />
      </div>
      <div className="social-icons">
        <div className="insta-wrap">
          <div className="insta"></div>
        </div>
        <div className="whatsapp-wrap">
          <div className="whatsapp"></div>
        </div>
        <div className="fb-wrap">
          <div className="fb"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
