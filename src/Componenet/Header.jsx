// src/components/Header.jsx
import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import from free-brands

const Header = () => {
  return (
    <header className="header">
      <h2>Our Food Recipes</h2>
      <a href="https://www.instagram.com/prahalad_19?utm_source=qr&igsh=MWdrYXpvZnZzMTdpNA==" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/prahalad-prajapat-b59bb0263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/prahaldprojects" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </header>
  );
};

export default Header;
