import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@/context/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggle, mode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: any) =>
    `nav-link premium-nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav
      className={`navbar premium-navbar fixed-top navbar-expand-lg ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand premium-logo" to="/">
          WebCraft
        </Link>

        {/* MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {/* THEME ICON */}
            <button
              onClick={toggle}
              className="premium-theme-toggle"
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* CTA */}
            <Link to="/contact" className="premium-cta">
              Book consultation
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;