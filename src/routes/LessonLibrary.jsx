import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../components/Navbar/Navbar';
import './LessonLibrary.css';
import birds from '../assets/birds.jpeg';
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
import VrPopup from './VrPopup';
import Jungle from '../assets/Jungle.mp4';

const LessonLibrary = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVrPopupOpen, setIsVrPopupOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const openModal = (id) => {
    setActiveLessonId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveLessonId(null);
  };

  const handleThumbnailClick = () => {
    setIsVrPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsVrPopupOpen(false);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
    setIsVrPopupOpen(false);

    if (videoRef.current) {
      videoRef.current.requestFullscreen().then(() => {
        videoRef.current.play();
      });
    }
  };

  // Function to handle video click and navigate to VR page
  const handleVideoClick = (lessonTitle) => {
    const formattedTitle = lessonTitle.replace(/\s+/g, '-'); // Format the title to create the URL
    navigate(`/vr/${formattedTitle}`);
  };

  // Video and content data for different lessons
  const lessonData = {
    1: {
      title: 'Meet the Animals',
      description:
        'The Learner will be able to accurately identify a safe moment to cross the street by locating crosswalks and monitoring vehicle movements.',
      videoSrc: Jungle,
      imageSrc: First,
      tags: ['neighborhood', 'crosswalk', 'safety', 'street', 'crossing'],
    },
    2: {
      title: 'Neighborhood Crosswalk',
      description: 'Explore the deep jungle and meet wild animals!',
      videoSrc: roads,
      imageSrc: roads,
      tags: ['jungle', 'wildlife', 'exploration', 'animals'],
    },
    3: {
      title: 'Cars and Roads',
      description: 'Understand the relationship between vehicles and road safety.',
      videoSrc: car,
      imageSrc: car,
      tags: ['vehicles', 'roads', 'safety'],
    },
    4: {
      title: 'Elephant Habitat',
      description: 'Learn about elephants and their natural habitats.',
      videoSrc: elephant,
      imageSrc: elephant,
      tags: ['elephant', 'habitat', 'nature'],
    },
  };

  const currentLesson = lessonData[activeLessonId];

  return (
    <div className="lesson-library">
      <Navbar />
      <div className="lesson-container">
        <h1 className="main-heading">Welcome to your</h1>
        <h2 className="jacques-francois-shadow-regular">Lesson Library</h2>

        <div className="image-section">
          <img
            src={jungle}
            alt="Person using VR"
            className="lesson-image"
            onClick={() => openModal(1)}
          />
        </div>

        {isModalOpen && currentLesson && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="modal-content bg-blue dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 max-w-xl relative">
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="modal-header">
                <h1 className="text-3xl font-semibold mb-4">{currentLesson.title}</h1>
              </div>

              <div className="modal-video-section mb-4">
                {!showVideo ? (
                  <div className="video-thumbnail">
                    <img
                      src={currentLesson.imageSrc}
                      alt="Lesson Thumbnail"
                      className="lesson-video-placeholder cursor-pointer w-full"
                      onClick={() => handleVideoClick(currentLesson.title)} // Navigate to VR page
                    />
                    <div className="play-button-overlay">▶</div>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={currentLesson.videoSrc}
                    controls
                    autoPlay
                    className="w-full h-auto"
                  />
                )}
              </div>

              <div className="lesson-info">
                <div className="lesson-details">
                  <div className="badge">All Ages</div>
                  <div className="language">All Language Levels</div>
                  <div className="tags">
                    tags: {currentLesson.tags.join(', ')}
                  </div>
                </div>
                <div className="lesson-description">
                  <p>{currentLesson.description}</p>
                  <p>
                    <strong>Summary:</strong> Navigate a virtual neighborhood to
                    learn and practice safe street-crossing techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="whats-new-section">
          <h3 className="see-whats-new">Start Your Virtual Journey</h3>
          <div className="new-lessons-container">
            <div className="lesson-card">
              <img
                src={roads}
                onClick={() => openModal(2)}
                alt="Lesson 1"
                className="lesson-card-image"
              />
              <h4>Neighborhood Crosswalk</h4>
              <p>All Language Levels</p>
            </div>

            <div className="lesson-card">
              <img
                src={car}
                onClick={() => openModal(3)}
                alt="Cars and Roads"
                className="lesson-card-image"
              />
              <h4>Cars and Roads</h4>
              <p>All Ages</p>
            </div>

            <div className="lesson-card">
              <img
                src={elephant}
                onClick={() => openModal(4)}
                alt="Elephant Habitat"
                className="lesson-card-image"
              />
              <h4>Elephant Habitat</h4>
              <p>All Ages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonLibrary;
