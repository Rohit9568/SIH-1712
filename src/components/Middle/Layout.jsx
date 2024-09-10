
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      {/* First Half */}
      <div className="first-half">
        <div className="left-content">
          <h1>A world of learning awaits.</h1>
          <p>
            Join the growing therapy teams who are coming together to create immersive learning programs 
            that support learning in and out of the office. Families, therapists, and educators work together 
            using Floreo to individualize the approach, make progress, and celebrate growth.
          </p>
          <a href="#learn-more" className="cta">
            Discover how Floreo can help neurodiverse individuals of all ages practice in VR and grow confidence in real life.
          </a>
        </div>
        <div className="right-content">
          <div className="card" id="therapists">
            <span role="img" aria-label="therapist">🏥</span> Floreo for Therapists
          </div>
          <div className="card" id="schools">
            <span role="img" aria-label="schools">🏫</span> Floreo for Schools
          </div>
          <div className="card" id="parents">
            <span role="img" aria-label="parents">👨‍👩‍👧</span> Floreo for Parents
          </div>
        </div>
      </div>

      {/* Second Half */}
      <div className="second-half">
        <div className="left-image">
          <img src="https://8184560.fs1.hubspotusercontent-na1.net/hubfs/8184560/Floreo%20Home%20Dive%20deeper.jpg" alt="VR Learning" />
        </div>
        <div className="right-content">
          <h2>Ready to take part in the first behavioral metaverse?</h2>
          <p>Connect with a member of our sales team to set up a demo today.</p>
          <button className="request-demo">Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
