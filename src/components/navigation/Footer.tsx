import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="border-top">
    <div className="container py-5">
      <div className="row">
        <div className="col-6 col-md-3">
          <h6>Company</h6>
          <ul className="list-unstyled">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md-3">
          <h6>Services</h6>
          <ul className="list-unstyled">
            <li><Link to="/services">Overview</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h6>Resources</h6>
          <ul className="list-unstyled">
            <li><Link to="/free-audit">Free Audit</Link></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h6>Get Started</h6>
          <p>Kick off your project today.</p>
          <Link className="btn btn-primary" to="/free-audit">Start Free Audit</Link>
          <div className="mt-3 d-flex gap-3">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">GH</a>
          </div>
        </div>
      </div>
      <div className="pt-4 text-center">© WebCraft Agency</div>
    </div>
  </footer>
);