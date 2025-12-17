import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-peach py-3">
        <div className="container text-center">
            <div className="mb-2">
                <Link to="/" style={{ textDecoration: 'none', color: '#ff6600', fontSize: '24px', fontWeight: 'bold' }}>
                    <span role="img" aria-label="sushi"></span> SUSHI FAST
                </Link>
            </div>
            <nav className="d-flex justify-content-center flex-wrap gap-3">
                <Link to="/" className="nav-link-custom">Tout voir</Link>
                <Link to="/saveur/avocat" className="nav-link-custom">Avocat</Link>
                <Link to="/saveur/saumon" className="nav-link-custom">Saumon</Link>
                <Link to="/saveur/coriandre" className="nav-link-custom">Coriandre</Link>
                <Link to="/special/sans-california" className="nav-link-custom" style={{color: '#d63031'}}>
                    Sans California
                </Link>
            </nav>
        </div>
    </header>
  );
};
export default Header;