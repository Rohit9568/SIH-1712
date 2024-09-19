import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import Navbar from './Navbar/Navbar';

const words = [
  { id: 1, text: 'Once upon a time', emoji: '📖' },
  { id: 2, text: 'a little girl', emoji: '👧' },
  { id: 3, text: 'went to the park', emoji: '🌳' },
  { id: 4, text: 'and saw a big dog', emoji: '🐕' },
  { id: 5, text: 'She played with it', emoji: '🎾' },
  { id: 6, text: 'and went home happy', emoji: '🏠' }
];

const StorySequencing = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [showStory, setShowStory] = useState(false); // Toggle to show/hide story
  const speechSynthesisRef = useRef(null); // Ref to track speech synthesis instance

  // Select a word and add it to the story
  const handleSelect = (word) => {
    setSelectedWords([...selectedWords, word]);
    const utterance = new SpeechSynthesisUtterance(word.text);
    window.speechSynthesis.speak(utterance);
  };

  // Play sound when hovering over a word
  const handleHover = (word) => {
    const utterance = new SpeechSynthesisUtterance(word.text);
    speechSynthesisRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Stop sound when hovering out of a word
  const handleHoverOut = () => {
    if (speechSynthesisRef.current) {
      window.speechSynthesis.cancel(); // Stop ongoing speech
      speechSynthesisRef.current = null; // Reset the ref
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-white mb-6 shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg">
          Story Sequencing
        </h1>

        {/* Button to Show/Hide Story Section */}
        <button
          className="mb-8 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all transform hover:scale-105 focus:outline-none shadow-lg"
          onClick={() => setShowStory(!showStory)}
        >
          {showStory ? 'Hide Story Sequencing' : 'Show Story Sequencing'}
        </button>

        {/* Conditionally show the story sequencing section */}
        {showStory && (
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {words.map((word) => (
              <motion.div
                key={word.id}
                className="bg-white text-gray-900 p-4 rounded-lg cursor-pointer shadow-md hover:bg-blue-200 hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                onClick={() => handleSelect(word)}
                onMouseEnter={() => handleHover(word)}  // Play sound on hover
                onMouseLeave={handleHoverOut}            // Stop sound on hover out
                whileHover={{ scale: 1.1, backgroundColor: "#c3dafe" }} // Animating on hover
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  maxWidth: '150px',
                  padding: '1rem',
                  textAlign: 'center'
                }}
              >
                <span className="text-3xl mb-2" role="img" aria-label={word.text}>
                  {word.emoji}
                </span>
                {word.text}
              </motion.div>
            ))}
          </div>
        )}

        {/* Selected Words Display */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Your Story</h2>
          <div className="space-y-4">
            <AnimatePresence>
              {selectedWords.map((word, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl mr-2" role="img" aria-label={word.text}>
                    {word.emoji}
                  </span>
                  {word.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySequencing;
