import React from 'react';
const Footer = () => {
  return (
    <footer className="footer-dark text-center">
        <div className="container">
            <h3>SUSHI FAST</h3>
            <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="#" className="text-white text-decoration-none">Mentions légales</a>
                <a href="#" className="text-white text-decoration-none">CGV</a>
                <a href="#" className="text-white text-decoration-none">Engagement</a>
                <a href="#" className="text-white text-decoration-none">Contact</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;