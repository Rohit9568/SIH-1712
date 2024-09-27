import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { FaInfoCircle } from 'react-icons/fa';

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
    const [hoveredItem, setHoveredItem] = useState(null); 
    const [showTooltip, setShowTooltip] = useState(false); 

    const handleIconClick = (speech) => {
        const utterance = new SpeechSynthesisUtterance(speech);
        window.speechSynthesis.speak(utterance);
    };

    const buttonColors = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col items-center p-6">
                <div className="relative items-center mb-10 w-full flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-10 shadow-lg bg-gradient-to-r from-indigo-400 to-purple-400 text-white p-3 rounded-lg text-center">
                        PECS Notebook
                    </h1>

                    {/* Info icon with hover tooltip, positioned to the top-right */}
                    <FaInfoCircle
                        className="absolute right-0 top-1 text-white text-3xl cursor-pointer"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    />
                    {showTooltip && (
                        <div className="absolute right-0 top-10 mt-2 w-64 p-3 bg-white text-gray-900 rounded-lg shadow-lg text-sm">
                            <strong>What is PECS?</strong><br />
                            PECS (Picture Exchange Communication System) is a communication tool for individuals with speech or communication challenges. It helps by using pictures to communicate needs and desires.
                        </div>
                    )}
                </div>

                {/* Main Menu for sections */}
                <div className="flex space-x-4 mb-6">
                    {Object.keys(sections).map((section, idx) => (
                        <button
                            key={section}
                            className={`px-4 py-2 text-white rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none ${buttonColors[idx % buttonColors.length]}`}
                            onClick={() => setCurrentSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Display section content */}
                {currentSection && (
                    <div className="w-full max-w-4xl relative">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {sections[currentSection].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer flex flex-col items-center relative"
                                    onClick={() => handleIconClick(item.speech)}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
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
