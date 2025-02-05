import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-links">
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>1 Markham Rd, Markham, Ontario, Canada</p>
        <p>+1 123-456-789</p>
        <p>info@MyoCharm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 MyoCharm. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;