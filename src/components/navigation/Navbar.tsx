import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@/context/ThemeProvider';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg glass-navbar ${scrolled ? 'shadow-sm' : ''}`} style={{ transition: 'background .3s ease, box-shadow .3s ease', padding: '1rem 0' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">WebCraft</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item px-2"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link" to="/services">Services</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link" to="/pricing">Pricing</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-ghost me-3" onClick={toggle} aria-label="Toggle theme">Theme</button>
            <Link to="/contact" className="btn btn-primary text-white d-flex align-items-center" style={{ background: 'var(--wc-primary-gradient)', border: 'none', padding: '0.55rem 1.05rem', borderRadius: 12 }}>
              Book consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

