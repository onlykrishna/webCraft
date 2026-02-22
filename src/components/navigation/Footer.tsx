import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="wc-footer mt-5">

    <div className="container py-5">

      <div className="row gy-4">

        {/* BRAND */}
        <div className="col-md-4">
          <h5 className="premium-logo mb-3">WebCraft</h5>
          <p className="wc-footer-muted">
            Modern web design & development for ambitious businesses.
          </p>
        </div>

        {/* SERVICES */}
        <div className="col-md-2">
          <h6 className="wc-footer-heading">Services</h6>
          <ul className="list-unstyled wc-footer-links">
            <li><Link to="/services">Design</Link></li>
            <li><Link to="/services">Development</Link></li>
            <li><Link to="/services">Strategy</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="col-md-3">
          <h6 className="wc-footer-heading">Company</h6>
          <ul className="list-unstyled wc-footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="col-md-3">
          <h6 className="wc-footer-heading">Follow</h6>

          <div className="d-flex gap-3 wc-footer-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
          </div>

          <Link to="/contact" className="premium-cta mt-3 d-inline-block">
            Start a project
          </Link>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="wc-footer-bottom text-center mt-5">
        © {new Date().getFullYear()} WebCraft Agency. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;