import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-light py-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <h5>WebCraft</h5>
          <p className="text-muted">Modern web design & development for ambitious businesses.</p>
        </div>
        <div className="col-md-2 mb-3">
          <h6>Services</h6>
          <ul className="list-unstyled">
            <li><Link to="/services">Design</Link></li>
            <li><Link to="/services">Development</Link></li>
            <li><Link to="/services">Strategy</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3">
          <h6>Company</h6>
          <ul className="list-unstyled">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3">
          <h6>Follow</h6>
          <div className="d-flex gap-2">
            <a href="#" aria-label="twitter" className="text-muted">Twitter</a>
            <a href="#" aria-label="linkedin" className="text-muted">LinkedIn</a>
            <a href="#" aria-label="dribbble" className="text-muted">Dribbble</a>
          </div>
          <div className="mt-3">
            <a className="btn btn-gradient text-white" href="/contact" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}>Start a project</a>
          </div>
        </div>
      </div>
      <div className="text-center text-muted mt-4">© {new Date().getFullYear()} WebCraft Agency. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;

