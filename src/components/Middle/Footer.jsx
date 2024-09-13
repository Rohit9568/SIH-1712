import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <img src="/path-to-logo" alt="Logo" className="footer-logo-image" />
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div className="footer-social">
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">TW</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
