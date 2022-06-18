import React from 'react';
import './SideNav.css';
import { NavLink } from 'react-router-dom';
import { SideNavCon, SideUl } from './SideNav.elements';
import { css } from 'glamor';

const SideNav = ({ isSidebarOpen, toggleSidebar }) => {
  const activeLink = {
    MenuLink: {
      cursor: 'pointer',
      textDecoration: 'none',
      listStyleType: 'none',
      color: '#000',
      transition: 'color 0.2s ease-in',

      ':hover': {
        color: '#c677af',
      },
    },
  };

  // const sideNavTransitionStyles = {
  //   transform: isSidebarOpen ? 'translateY(0)' : 'translateY(-100%)',
  // };

  // const sideNavLinkTransitionStyles = {
  //   transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
  //   opacity: isSidebarOpen ? '1' : '0',
  // };

  return (
    <SideNavCon
      className="side-nav"
      // style={sideNavTransitionStyles}
      isSidebarOpen={isSidebarOpen}
      onClick={toggleSidebar}
    >
      <SideUl
        className="side-nav-wrapper"
        // style={sideNavLinkTransitionStyles}
        isSidebarOpen={isSidebarOpen}
      >
        <NavLink
          exact
          to="/"
          {...css(activeLink.MenuLink)}
          activeStyle={{ color: '#c677af' }}
        >
          <li className="side-nav-link">HOME</li>
        </NavLink>
        <NavLink
          exact
          to="/apparel"
          {...css(activeLink.MenuLink)}
          activeStyle={{ color: '#c677af' }}
        >
          <li className="side-nav-link">APPAREL</li>
        </NavLink>
        <NavLink
          exact
          to="/gag"
          {...css(activeLink.MenuLink)}
          activeStyle={{ color: '#c677af' }}
        >
          <li className="side-nav-link">ABOUT US</li>
        </NavLink>
        <NavLink
          exact
          to="/gag"
          {...css(activeLink.MenuLink)}
          activeStyle={{ color: '#c677af' }}
        >
          <li className="side-nav-link">CONTACT US</li>
        </NavLink>
      </SideUl>
    </SideNavCon>
  );
};

export default SideNav;
