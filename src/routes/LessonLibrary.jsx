import Navbar from '../components/Navbar/Navbar';
import './LessonLibrary.css'; // Add this to handle the styling
import   { useState,useRef } from 'react'
import birds from '../assets/birds.jpeg';  // Go up one level from routes, then into assets
import girlsit from '../assets/girlsit.jpeg';
import pool from '../assets/pool.png';
import roads from '../assets/roads.jpeg';
import myra from '../assets/myra.jpeg';
import tree from '../assets/tree.jpeg';
import jungle from '../assets/jungle.jpeg';
import car from '../assets/car.png';
import elephant from '../assets/elephant.png';
import First from '../assets/First.png';
import lion from '../assets/lion.png';
import VrPopup from './VrPopup'; // Import the connection popup component
import Jungle from '../assets/Jungle.mp4';


const LessonLibrary = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVrPopupOpen, setIsVrPopupOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null); // Create a reference for the video

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleThumbnailClick = () => {
    setIsVrPopupOpen(true); // Open the popup when the thumbnail is clicked
  };

  const handlePopupClose = () => {
    setIsVrPopupOpen(false); // Close popup on button click
  };

  const handleShowVideo = () => {
    setShowVideo(true);
    setIsVrPopupOpen(false);

    // Play video in fullscreen
    if (videoRef.current) {
      videoRef.current.requestFullscreen().then(() => {
        videoRef.current.play();
      });
    }
  };

  return (
 <div className="lesson-library">
      <Navbar />
      <div className="lesson-container">
        <h1 className="main-heading">Sahayak</h1>
        <h2 className="sub-heading">Lesson Library</h2>

        <div className="image-section">
          <img
            src={jungle}
            alt="Person using VR"
            className="lesson-image"
            onClick={openModal} // Open modal on image click
          />
        </div>

        {isModalOpen && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="modal-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 max-w-xl relative">
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Modal Header */}
              <div className="modal-header">
                <h1 className="text-3xl font-semibold mb-4">Neighborhood Crosswalk</h1>
              </div>
 {/* Modal Media Section */}
 <div className="modal-video-section mb-4">
                {!showVideo ? (
                  <div className="video-thumbnail">
                    <img
                      src={First}
                      alt="Lesson Thumbnail"
                      className="lesson-video-placeholder cursor-pointer w-full"
                      onClick={handleThumbnailClick}
                    />
                    <div className="play-button-overlay">▶</div> {/* Play button overlay */}
                  </div>
                ) : (
                  <video
                    ref={videoRef} // Reference to the video
                    src={Jungle}
                    controls
                    autoPlay
                    className="w-full h-auto"
                  />
                )}
              </div>

              {/* Lesson Information */}
              <div className="lesson-info">
                <div className="lesson-details">
                  <div className="badge">All Ages</div>
                  <div className="language">All Language Levels</div>
                  <div className="tags">tags: neighborhood, crosswalk, safety, street, crossing</div>
                </div>
                <div className="lesson-description">
                  <p>
                    The Learner will be able to accurately identify a safe moment to cross the street by locating crosswalks and monitoring vehicle movements.
                  </p>
                  <p>
                    <strong>Summary:</strong> Navigate a virtual neighborhood to learn and practice safe street-crossing techniques.
                  </p>
                </div>
              </div>

              {/* Related Lessons Section */}
              <div className="related-lessons-section">
                <h2 className="text-2xl font-semibold">Related Lessons</h2>
                <div className="related-lessons-container flex space-x-4">
                  <div className="related-lesson">
                    <img src={roads} alt="Related Lesson 1" />
                    <p>Don't Follow the Jaywalker!</p>
                    <button className="text-blue-500">View Lesson</button>
                  </div>
                  <div className="related-lesson">
                    <img src={roads} alt="Related Lesson 2" />
                    <p>Check For Risky Cars!</p>
                    <button className="text-blue-500">View Lesson</button>
                  </div>
                  <div className="related-lesson">
                    <img src={roads} alt="Related Lesson 3" />
                    <p>Lucky Corner, Driver Wave</p>
                    <button className="text-blue-500">View Lesson</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VR Popup for connection status */}
        {isVrPopupOpen && (
          <VrPopup onClose={handlePopupClose} onShowVideo={handleShowVideo} />
        )}
        
      
          {/* New Section */}
          <div className="whats-new-section">
          <h3 className="see-whats-new">See What's New</h3>
          <div className="new-lessons-container">
            <div className="lesson-card">
              <div className="coming-soon-overlay">COMING SOON</div>
              <img src= {roads}    onClick={openModal} alt="Lesson 1" className="lesson-card-image" />
              <h4>Neighborhood Crosswalk</h4>
              <p>All Language Levels</p>
           
            </div>
            <div className="lesson-card">
              <div className="coming-soon-overlay">COMING SOON</div>
              <img src= {pool} alt="Lesson 2" onClick={openModal}  className="lesson-card-image" />
              <h4>Pool Party Safety: The Basics</h4>
              <p>All Language Levels</p>
             
            </div>

            <div className="lesson-card">
              <img src={tree} alt="Lesson 3" className="lesson-card-image" />
              <h4>Lush Forests</h4>
              <p>All Language Levels</p>
            </div>

            <div className="lesson-card">
              <img src={myra} alt="Lesson 4" className="lesson-card-image" />
              <h4>Chit-Chat with Myra</h4>
              <p>Verbal, Highly Verbal</p>
            </div>

            <div className="lesson-card">
              <img src= {birds} alt="Lesson 5" className="lesson-card-image" />
              <h4>Flight with Animals</h4>
              <p>All Language Levels</p>
            </div>

            <div className="lesson-card">
              <img src={girlsit} alt="Lesson 6" className="lesson-card-image" />
              <h4>Chit-Chat with Ayanna</h4>
              <p>Verbal, Highly Verbal</p>
            </div>

          </div>
        </div>

         {/* New Section: Communicative Eye Gaze */}
         <div className="gaze-section">
          <h3 className="sub-heading">Communicative Eye Gaze</h3>
          <div className="grid-section">
            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-a32c7d0bb1ecfe9fd019287d0e18a0377361ac9249e746aa0d5cda41?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Meet The Animals"
                className="lesson-card-image"
              />
              <h4>Meet The Animals</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-290515824c3d60dc39f4852b5e17b8712d29bee45aaa3dcd83ab8243?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Who Made That Sound?"
                className="lesson-card-image"
              />
              <h4>Who Made That Sound?</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-f7bcb34f950dda35d6b435cafd323fc75925263b6ae43449d7713283?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Watch It Go"
                className="lesson-card-image"
              />
              <h4>Watch It Go</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-81c99766c16399d13602651231fecbed0f1627865aa5267bd542402b?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Emma is Pointing"
                className="lesson-card-image"
              />
              <h4>Emma is Pointing</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-b6ebef66ad6c9701f361d1020e55e09ef0f1ee5156e1f3a17afee2b0?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Emma Wants to Look Too"
                className="lesson-card-image"
              />
              <h4>Emma Wants to Look Too</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-a63ca4bd879d2bd0c9de8d5a96242b235a27b06aa2f784323ef183bb?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Get Emma's Attention"
                className="lesson-card-image"
              />
              <h4>Get Emma's Attention</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-2fbc5f848f8c887ad34bc91a0d6f51ddf4ad4f729c8f3961fa5ce5f9?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Safari Survey"
                className="lesson-card-image"
              />
              <h4>Safari Survey</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-e471fcc6baab9c3be578ffbaff4ebbed1c542af176c66ed7cdfea1c3?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Look & Find 180"
                className="lesson-card-image"
              />
              <h4>Look & Find 180</h4>
              <p>All language levels</p>
            </div>
          </div>
        </div>


          {/* New Section: Communicative & Daily Living */}
          <div className="gaze-section">
          <h3 className="sub-heading">Communicative & Daily Living</h3>
          <div className="grid-section">
            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-4cd53392434be6514d5e9c6682f7eaed07464e017646289af80f894f?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Meet The Animals"
                className="lesson-card-image"
              />
              <h4>Find Your Bus: This is Your Bus</h4>
              <p>Minimally verbal, Verbal, Highly verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-fb08d6628b9bed8823622288f439d96714a8bb1daea5832e6b60d5dd?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Who Made That Sound?"
                className="lesson-card-image"
              />
              <h4>Find Your Bus: Wait for 2nd Bus</h4>
              <p>Minimally verbal, Verbal, Highly verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-fecafa644385aa0543ac9b51875ac2faa24b2fb7ca957fd0b5ca2ead?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Watch It Go"
                className="lesson-card-image"
              />
              <h4> Find Your Bus: Destination Not On Schedule</h4>
              <p>Minimally verbal, Verbal, Highly verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-32ce26112b160acc2e34728925ac139e75f3fa5d6ad0e701e5598c20?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Emma is Pointing"
                className="lesson-card-image"
              />
              <h4>Find Your Bus: With Other People</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-b20a5860247d488b1bcbffd9c8a0a2979fd6fcbfd66852de3a4ae7dc?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Emma Wants to Look Too"
                className="lesson-card-image"
              />
              <h4>Find Your Bus: Unmarked Bus</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-c29b804699a3de1dcc1c7a61400c29f0df18753f4dc2482d25323c54?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Get Emma's Attention"
                className="lesson-card-image"
              />
              <h4>Find Your Bus: Troubleshoot Missed Bus</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-3d001cee2e85d47dd2b164beb2f30a6c4885541bfccb9610591f2a39?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Safari Survey"
                className="lesson-card-image"
              />
              <h4>Police Questions 1</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>

            <div className="lesson-card">
              <img
                src="https://photos.floreotech.com/sha224-i-7d944dc0d42cb4689a258b64be3e3364c576ee36acb7c194f5f80d4f?w=248&fit=crop&auto=format&dpr=2%202x"
                alt="Look & Find 180"
                className="lesson-card-image"
              />
              <h4>Police Questions 2</h4>
              <p>Nonverbal/Minimally verbal/Verbal</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LessonLibrary;
