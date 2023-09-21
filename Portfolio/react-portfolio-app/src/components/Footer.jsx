import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaBandcamp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="brand">
        <FaBandcamp />
        <span>Portfolio</span>
      </div>
      <div>
        <a href="https://www.facebook.com/your-facebook-profile-url" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className='social-icons' />
        </a>
        <a href="https://instagram.com/vkreign_18?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='social-icons' />
        </a>
        <a href="https://www.linkedin.com/in/mirzasahid18" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='social-icons' />
        </a>
        <a href="https://twitter.com/your-twitter-profile-url" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='social-icons' />
        </a>
      </div>
      <div className="text">
        <p>Copyright © 2023 VkReing18. <br /> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
