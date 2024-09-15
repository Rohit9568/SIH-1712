import React, { useState } from 'react';

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
    // Track completed items
    setCompletedItems(prev => ({ ...prev, [item.value]: true }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Interactive Learning Module</h1>

      {/* Category Selection */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(interactiveContent).map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setCurrentCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {interactiveContent[currentCategory].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-blue-100 ${completedItems[item.value] ? 'border-2 border-green-500' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <span className="text-4xl mb-2" role="img" aria-label={item.value}>
                {item.emoji}
              </span>
              <p className="text-lg font-medium text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearningModule;
