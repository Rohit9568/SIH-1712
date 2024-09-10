import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown for Learning Center
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <h3 className="logo">Sahayak</h3>
      <ul>
        <li>
          <Link to="/uses" className="link">
            Who Uses Sahayak <span className="symbol">&gt;</span>
          </Link>
        </li>
        <li>
          <Link to="/work" className="link">
            How it Works <span className="symbol">&gt;</span>
          </Link>
        </li>
        <li>
          <Link to="/research" className="link">
            Research
          </Link>
        </li>
        <li>
          <Link to="/testimonials" className="link">
            Testimonials
          </Link>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/learning" className="link">
            Learning Center <span className="symbol">{isDropdownOpen ? 'v' : '>'}</span>
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/faq" className="dropdown-link">FAQ</Link></li>
              <li><Link to="/lesson-library" className="dropdown-link">Lesson Library</Link></li>
              <li><Link to="/knowledge-base" className="dropdown-link">Knowledge Base</Link></li>
              <li><Link to="/training-videos" className="dropdown-link">Training Videos</Link></li>
              <li><Link to="/blog" className="dropdown-link">Blog</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/company" className="link">
            Company <span className="symbol">&gt;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
