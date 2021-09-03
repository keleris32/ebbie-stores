import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import './Footer.css';
import './FooterMediaQueries.css';
import {
  activePadTab,
  activeTightsTab,
  activeWaistTab,
} from '../../Context/action/apparelActions';
import { GlobalContext } from '../../Context/Provider';

const Footer = () => {
  // initialize history hook from from react-router-dom
  const history = useHistory();

  // apparel global state
  const { apparelDispatch } = useContext(GlobalContext);

  // make waist apparel tab active and move to apparel page
  const moveToWaistTab = () => {
    activeWaistTab()(apparelDispatch);

    history.push('/apparel');
  };

  // make tights apparel tab active and move to apparel page
  const moveToTightsTab = () => {
    activeTightsTab()(apparelDispatch);

    history.push('/apparel');
  };

  // make pad apparel tab active and move to apparel page
  const moveToPadTab = () => {
    activePadTab()(apparelDispatch);

    history.push('/apparel');
  };

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="upper-footer">
          <div className="footer-logo-con">
            <h1 className="footer-logo">ebbie.</h1>
            <p className="footer-logo-motto">...Beyond Beauty</p>
          </div>
          <div className="footer-links">
            <div className="link-wrap">
              <h2 className="link-title">Apparel</h2>
              <span className="link" onClick={moveToWaistTab}>
                Waist trainers
              </span>
              <span className="link" onClick={moveToTightsTab}>
                Butt Lifters
              </span>
              <span className="link" onClick={moveToPadTab}>
                Arm Shapers
              </span>
            </div>
            <div className="link-wrap">
              <h2 className="link-title">About us</h2>
              <span className="link">Our story</span>
              <span className="link">Our guide</span>
            </div>
          </div>
          <div className="footer-contact">
            <h2 className="link-title">Connect with us</h2>
            <div className="contact-wrap">
              <span>
                <IoCall className="contact-icon" /> 08188404900
              </span>
            </div>
            <div className="contact-wrap">
              <span>
                <IoMdMail className="contact-icon" /> info@ebbiestores.com
              </span>
            </div>
            <div className="social-contact">
              <div className="social-icon-wrap wh-icon">
                <FaWhatsapp className="social-icon" />
              </div>
              <div className="social-icon-wrap ig-icon">
                <FaInstagram className="social-icon" />
              </div>
              <div className="social-icon-wrap fb-icon">
                <FaFacebookF className="social-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          &copy; {new Date().getFullYear()} ebbie. | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
