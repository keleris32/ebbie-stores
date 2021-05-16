import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
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
              <a href="" className="link">
                Waist trainers
              </a>
              <a href="" className="link">
                Arm guards
              </a>
              <a href="" className="link">
                Yoga shorts
              </a>
            </div>
            <div className="link-wrap">
              <h2 className="link-title">About us</h2>
              <a href="" className="link">
                Our story
              </a>
              <a href="" className="link">
                Our guide
              </a>
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
