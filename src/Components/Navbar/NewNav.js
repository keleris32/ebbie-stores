import React from 'react';
import './NewNav.css';
import './NavMediaQueries.css';

const NewNav = () => {
  return (
    <div className="new-nav">
      <div className="new-nav-wrapper">
        <div className="new-nav-1st-wrap">
          <li className="new-nav-link">WAIST CORSETS</li>
          <li className="new-nav-link">APPAREL</li>
        </div>
        <h1 className="new-nav-logo">ebbie.</h1>
        <div className="new-nav-2nd-wrap">
          <li className="new-nav-link">ABOUT US</li>
          <li className="new-nav-link">CONTACT US</li>
        </div>
        <div className="hamburger-con">
          <div className="hamburger" />
        </div>
      </div>
    </div>
  );
};

export default NewNav;
