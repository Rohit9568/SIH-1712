import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations

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

  const handleSelect = (word) => {
    setSelectedWords([...selectedWords, word]);
    const utterance = new SpeechSynthesisUtterance(word.text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Story Sequencing</h1>

      {/* Words Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {words.map((word) => (
          <div
            key={word.id}
            className="bg-blue-500 text-white p-4 rounded-md cursor-pointer hover:bg-blue-600"
            onClick={() => handleSelect(word)}
          >
            <span className="text-2xl mr-2" role="img" aria-label={word.text}>
              {word.emoji}
            </span>
            {word.text}
          </div>
        ))}
      </div>

      {/* Selected Words Display */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Story</h2>
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
  );
};

export default StorySequencing;
