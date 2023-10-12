import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        &copy; 2022 Sistem Informasi Kelautan UPI
      </div>
      <div className="footer-center">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i>Fb</a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i>Tw</a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram">IG</i></a>
      </div>
      <div className="footer-right">
      All Right Reserved.
      </div>
    </div>
  );
}

export default Footer;
