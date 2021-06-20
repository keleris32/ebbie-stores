import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { css } from 'glamor';
import './NewNav.css';
import './NavMediaQueries.css';

const activeLink = {
  MenuLink: {
    padding: '0 2.5em',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000',
    transition: 'color 0.2s ease-in',

    ':hover': {
      color: '#c677af',
    },
  },
};

// .new-nav-link {
//   padding: 0 2.5em;
//   cursor: pointer;
//   transition: color 0.2s ease-in;
// }

const NewNav = () => {
  return (
    <div className="new-nav">
      <div className="new-nav-wrapper">
        <div className="new-nav-1st-wrap">
          <NavLink
            exact
            to="/gag"
            {...css(activeLink.MenuLink)}
            activeStyle={{ color: '#c677af' }}
          >
            <li className="new-nav-link">WAIST CORSETS</li>
          </NavLink>
          <NavLink
            exact
            to="/apparel"
            {...css(activeLink.MenuLink)}
            activeStyle={{ color: '#c677af' }}
          >
            <li className="new-nav-link">APPAREL</li>
          </NavLink>
        </div>
        <Link to="/" className="logo-link">
          <h1 className="new-nav-logo">ebbie.</h1>
        </Link>
        <div className="new-nav-2nd-wrap">
          <NavLink
            exact
            to="/gag"
            {...css(activeLink.MenuLink)}
            activeStyle={{ color: '#c677af' }}
          >
            <li className="new-nav-link">ABOUT US</li>
          </NavLink>
          <NavLink
            exact
            to="/gag"
            {...css(activeLink.MenuLink)}
            activeStyle={{ color: '#c677af' }}
          >
            <li className="new-nav-link">CONTACT US</li>
          </NavLink>
        </div>
        <div className="hamburger-con">
          <div className="hamburger" />
        </div>
      </div>
    </div>
  );
};

export default NewNav;
