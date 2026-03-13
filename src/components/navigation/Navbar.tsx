import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeProvider';

export const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const { toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg px-3 ${solid ? 'bg-light shadow-sm' : 'bg-transparent'}`}
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          WebCraft
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Link className="btn btn-primary" to="/free-audit">
              Free Audit
            </Link>
            <button className="btn btn-outline-secondary" onClick={toggle}>Theme</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
