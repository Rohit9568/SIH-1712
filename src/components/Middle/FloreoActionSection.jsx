
import "./FloreoActionSection.css";

const FloreoActionSection = () => {
  return (
    <div className="floreo-section">
      <div className="floreo-text">
        <h1>See Sahayak in Action</h1>
        <p>
          Learn how our technology helps effective therapy to be fun and happen
          from anywhere. Contact our sales team today.
        </p>
        <button className="request-demo-btn">Request a demo</button>
      </div>
      <div className="floreo-image">
        {/* Replace 'your-image-path.png' with the actual image path */}
        <img
          src="https://8184560.fs1.hubspotusercontent-na1.net/hubfs/8184560/floreo-image-1@2x.png"
          alt="Child using VR technology"
          className="demo-image"
        />
      </div>
    </div>
  );
};

export default FloreoActionSection;
