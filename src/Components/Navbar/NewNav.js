import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { css } from 'glamor';
import { Nav, NavBtn, NavLinkCon } from './NewNav.elements';
import './NewNav.css';
import './NavMediaQueries.css';
import { GrCart } from 'react-icons/gr';

const activeLink = {
  MenuLink: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000',
    transition: 'color 0.2s ease-in',

    ':hover': {
      color: '#c677af',
    },
  },
};

const NewNav = ({ isSidebarOpen, toggleSidebar }) => {
  const navbarTransitionStyles = {
    position: isSidebarOpen ? 'absolute' : 'static',
    zIndex: isSidebarOpen ? '2000' : 'auto',
    left: isSidebarOpen ? '50%' : '0',
    transform: isSidebarOpen ? 'translateX(-50%)' : 'translateX(0)',
  };

  const hideNavbarElements = {
    display: isSidebarOpen ? 'none' : 'block',
  };

  const hamburgerConTransitionStyles = {
    transform: isSidebarOpen ? 'translateX(-50%)' : 'transform(0)',
    left: isSidebarOpen ? '50%' : '0',
    position: isSidebarOpen ? 'absolute' : 'static',
  };

  return (
    <Nav className="new-nav" isSidebarOpen={isSidebarOpen}>
      <NavBtn
        className="hamburger-con"
        onClick={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      >
        <NavLinkCon className="hamburger" isSidebarOpen={isSidebarOpen} />
      </NavBtn>
      <div className="new-nav-wrapper">
        <div className="new-nav-1st-wrap">
          <NavLink
            exact
            to="/"
            {...css(activeLink.MenuLink)}
            activeStyle={{ color: '#c677af' }}
          >
            <li className="new-nav-link">HOME</li>
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
        <Link to="/" className="logo-link" style={hideNavbarElements}>
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
      </div>
      <div style={hideNavbarElements}>
        <GrCart className="cart" />
      </div>
    </Nav>
  );
};

export default NewNav;
