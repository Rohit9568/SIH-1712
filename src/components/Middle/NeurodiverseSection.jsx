
import './NeurodiverseSection.css';
import vr from '../../assets/vr.png'; // Adjust this with your actual image name
import fish from '../../assets/fish.webp'; // Adjust this with your actual image name


const NeurodiverseSection = () => {
  return (
    <div className="neurodiverse-section">
      {/* First half with children and VR background */}
      <div className="top-section">
        <img src={vr} alt="Children using VR" className="vr-image" />
      </div>
      
      {/* Second half with card */}
      <div className="bottom-section">
        <div className="card-container">
          <div className="card-left">
            <div className="card-image-container">
              <span className="featured-label">FEATURED LESSON</span>
              <img src={fish} alt="Underwater Lesson" className="card-image" />
            </div>
            <h3>Sensory Regulation: Find the Fish</h3>
            <p>
                     Sit in a calm, bright underwater virtual environment to practice .
            </p>
          </div>
          <div className="card-right">
            <h2>Lessons designed with neurodiverse Learners in mind</h2>
            <p>
              Explore our library of immersive VR lessons aimed to help build important social and behavioral regulation skills.
            </p>
            <button className="explore-button">Explore Lessons</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurodiverseSection;
