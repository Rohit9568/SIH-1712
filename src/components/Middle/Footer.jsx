import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/path-to-logo" alt="Floreo Logo" className="footer-logo-image" />
          </div>

          <div className="footer-buttons">
            <button className="footer-btn">Login</button>
            <button className="footer-btn">Contact</button>
          </div>

          <div className="footer-social">
            <a href="https://instagram.com" className="social-icon instagram">IG</a>
            <a href="https://linkedin.com" className="social-icon linkedin">IN</a>
            <a href="https://facebook.com" className="social-icon facebook">FB</a>
            <a href="https://x.com" className="social-icon twitter">X</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
            {/* First column containing "Who Uses Sahayak" and "How it Works" */}
            <div className="footer-column">
              <h4>Who Uses Sahayak</h4>
              <ul>
                <li><a href="#">Sahayak for Providers</a></li>
                <li><a href="#">Sahayak for Education</a></li>
                <li><a href="#">Sahayak for Families</a></li>
                <li><a href="#">Sahayak Partners</a></li>
              </ul>

              <h4>How it Works</h4>
              <ul>
                <li><a href="#">How to Buy Floreo</a></li>
                <li><a href="#">Floreo Learner Experience</a></li>
              </ul>
            </div>

            {/* Second column containing "Learning Center" and "Company" */}
            <div className="footer-column">
              <h4>Learning Center</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Lesson Library</a></li>
                <li><a href="#">Floreo Help</a></li>
                <li><a href="#">Blog</a></li>
              </ul>

              <h4>Company</h4>
              <ul>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>

              <h4>Newsletter Signup</h4>
              <form>
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="submit" className="newsletter-btn">Sign Up</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© Copyright 2023 Floreo</p>
            <ul className="footer-bottom-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Health and Safety</a></li>
              <li><a href="#">Financial Conflict of Interest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
