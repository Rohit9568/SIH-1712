import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';

const sections = {
    food: [
        { icon: "🍎", label: "Apple", speech: "Apple" },
        { icon: "🍕", label: "Pizza", speech: "Pizza" },
        { icon: "🍌", label: "Banana", speech: "Banana" },
        { icon: "🥪", label: "Sandwich", speech: "Sandwich" },
        { icon: "🍔", label: "Burger", speech: "Burger" },
        { icon: "🥤", label: "Juice", speech: "Juice" },
        { icon: "🍰", label: "Cake", speech: "Cake" }
      ],
      activities: [
        { icon: "⚽", label: "Play", speech: "Play" },
        { icon: "📖", label: "Read", speech: "Read" },
        { icon: "🏃‍♂️", label: "Run", speech: "Run" },
        { icon: "🎨", label: "Draw", speech: "Draw" },
        { icon: "🎵", label: "Music", speech: "Music" },
        { icon: "🧩", label: "Puzzle", speech: "Puzzle" },
        { icon: "🎲", label: "Games", speech: "Games" }
      ],
      emotions: [
        { icon: "😊", label: "Happy", speech: "Happy" },
        { icon: "😢", label: "Sad", speech: "Sad" },
        { icon: "😡", label: "Angry", speech: "Angry" },
        { icon: "😨", label: "Scared", speech: "Scared" },
        { icon: "😎", label: "Excited", speech: "Excited" },
        { icon: "😴", label: "Tired", speech: "Tired" },
        { icon: "😒", label: "Bored", speech: "Bored" }
      ],
      people: [
        { icon: "👨", label: "Man", speech: "Man" },
        { icon: "👩", label: "Woman", speech: "Woman" },
        { icon: "👶", label: "Baby", speech: "Baby" },
        { icon: "👴", label: "Grandpa", speech: "Grandpa" },
        { icon: "👵", label: "Grandma", speech: "Grandma" },
        { icon: "👨‍⚕️", label: "Doctor", speech: "Doctor" },
        { icon: "👩‍🏫", label: "Teacher", speech: "Teacher" }
      ],
      request: [
        { icon: "🆘", label: "Help", speech: "Help", request: "I need help." },
        { icon: "🔄", label: "More", speech: "More", request: "I want more." },
        { icon: "✅", label: "Yes", speech: "Yes", request: "Yes, please." },
        { icon: "❌", label: "No", speech: "No", request: "No, thank you." },
        { icon: "🚫", label: "Stop", speech: "Stop", request: "Please stop." },
        { icon: "👋", label: "Goodbye", speech: "Goodbye", request: "Goodbye!" },
        { icon: "🔊", label: "Louder", speech: "Louder", request: "Can you speak louder?" }
      ],
      places: [
        { icon: "🏠", label: "Home", speech: "Home" },
        { icon: "🏥", label: "Hospital", speech: "Hospital" },
        { icon: "🏫", label: "School", speech: "School" },
        { icon: "🏖️", label: "Beach", speech: "Beach" },
        { icon: "🛒", label: "Store", speech: "Store" },
        { icon: "🚗", label: "Car", speech: "Car" },
        { icon: "🚉", label: "Train Station", speech: "Train Station" }
      ],
      objects: [
        { icon: "📱", label: "Phone", speech: "Phone" },
        { icon: "💻", label: "Computer", speech: "Computer" },
        { icon: "📚", label: "Books", speech: "Books" },
        { icon: "🧸", label: "Teddy Bear", speech: "Teddy Bear" },
        { icon: "🎁", label: "Gift", speech: "Gift" },
        { icon: "🖊️", label: "Pen", speech: "Pen" },
        { icon: "🕰️", label: "Clock", speech: "Clock" }
      ]
};

const PECSNotebook = () => {
  const [currentSection, setCurrentSection] = useState(null);

  const handleIconClick = (speech) => {
    const utterance = new SpeechSynthesisUtterance(speech);
    window.speechSynthesis.speak(utterance);
  };

  return (<>
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">PECS Notebook</h1>
      
      {/* Main Menu */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setCurrentSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Icons Section */}
      {currentSection && (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {sections[currentSection].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-blue-100"
                onClick={() => handleIconClick(item.speech)}
              >
                <span className="text-4xl mb-2" role="img" aria-label={item.label}>
                  {item.icon}
                </span>
                <p className="text-lg font-medium text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PECSNotebook;
