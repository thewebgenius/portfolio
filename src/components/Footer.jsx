import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shivam Shah</h3>
            <p>Computer Science Student | ML & AI Enthusiast</p>
            <p className="footer-quote">"I'm not just building models — I'm exploring how learning agents evolve behavior."</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/thewebgenius" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/shubham-shah-b6a03b296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/theshubham_shah_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/shubham.shah.743" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shivam Shah. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

