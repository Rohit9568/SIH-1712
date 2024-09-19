import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';

// Mock data for interactive content
const interactiveContent = {
  numbers: [
    { value: 1, audio: "Number one", emoji: "🔢" },
    { value: 2, audio: "Number two", emoji: "🔢" },
    { value: 3, audio: "Number three", emoji: "🔢" },
    // Add more numbers
  ],
  letters: [
    { value: 'A', audio: "Letter A", emoji: "🔤" },
    { value: 'B', audio: "Letter B", emoji: "🔤" },
    { value: 'C', audio: "Letter C", emoji: "🔤" },
    // Add more letters
  ],
  colors: [
    { value: 'Red', audio: "Color red", emoji: "🟥" },
    { value: 'Blue', audio: "Color blue", emoji: "🔵" },
    { value: 'Green', audio: "Color green", emoji: "🟢" },
    // Add more colors
  ],
  shapes: [
    { value: 'Circle', audio: "Shape circle", emoji: "🔵" },
    { value: 'Square', audio: "Shape square", emoji: "⬛" },
    { value: 'Triangle', audio: "Shape triangle", emoji: "🔺" },
    // Add more shapes
  ]
};

const InteractiveLearningModule = () => {
  const [currentCategory, setCurrentCategory] = useState('numbers');
  const [completedItems, setCompletedItems] = useState({});

  const handleItemClick = (item) => {
    const utterance = new SpeechSynthesisUtterance(item.audio);
    window.speechSynthesis.speak(utterance);
    setCompletedItems(prev => ({ ...prev, [item.value]: true }));
  };

  // Color scheme for each category
  const categoryColors = {
    numbers: 'bg-gradient-to-r from-blue-400 to-blue-600',
    letters: 'bg-gradient-to-r from-purple-400 to-purple-600',
    colors: 'bg-gradient-to-r from-green-400 to-green-600',
    shapes: 'bg-gradient-to-r from-yellow-400 to-yellow-600'
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-100 to-purple-200 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-lg">
          Interactive Learning Module
        </h1>

        {/* Category Selection */}
        <div className="flex space-x-4 mb-8">
          {Object.keys(interactiveContent).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-xl ${categoryColors[category]} ${
                currentCategory === category ? 'opacity-90' : 'opacity-75'
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {interactiveContent[currentCategory].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-white ${
                  completedItems[item.value] ? 'border-2 border-green-500' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                <span className="text-5xl mb-4" role="img" aria-label={item.value}>
                  {item.emoji}
                </span>
                <p className="text-lg font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveLearningModule;
