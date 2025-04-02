import React from 'react';
import './Footer.css'; // Add this import for the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2024 Student Hub. All rights reserved. | Designed to help students manage their academic life.
        </p>
        <p className="footer-text">
          For more information, contact us at <a href="mailto:studenthub@gmail.com">studenthub@gmail.com</a>. Follow us on social media for updates and announcements.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
