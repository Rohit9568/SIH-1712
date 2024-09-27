import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { FaInfoCircle } from 'react-icons/fa';

const initialWords = {
  start: [
    { word: 'I', emoji: '🙋‍♂️' },
    { word: 'We', emoji: '👨‍👩‍👧‍👦' },
    { word: 'Me', emoji: '👤' },
    { word: 'He', emoji: '👦' },
    { word: 'She', emoji: '👩' },
    { word: 'They', emoji: '👫' }
  ],
  action: [
    { word: 'want', emoji: '🤲' },
    { word: 'need', emoji: '🆘' },
    { word: 'like', emoji: '👍' },
    { word: 'see', emoji: '👀' },
    { word: 'hear', emoji: '👂' },
    { word: 'play', emoji: '🎮' }
  ],
  object: [
    { word: 'apple', emoji: '🍎' },
    { word: 'pizza', emoji: '🍕' },
    { word: 'book', emoji: '📚' },
    { word: 'ball', emoji: '🏀' },
    { word: 'car', emoji: '🚗' },
    { word: 'dog', emoji: '🐶' },
    { word: 'cat', emoji: '🐱' }
  ],
  end: [
    { word: 'please', emoji: '🙏' },
    { word: 'now', emoji: '⏰' },
    { word: 'later', emoji: '⏳' },
    { word: 'soon', emoji: '🕒' },
    { word: 'thank you', emoji: '🙏' }
  ]
};

const SentenceBuilder = () => {
  const [sentence, setSentence] = useState([]);
  const [availableWords, setAvailableWords] = useState(initialWords.start);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWordClick = (word) => {
    const updatedSentence = [...sentence, word];
    setSentence(updatedSentence);

    const utterance = new SpeechSynthesisUtterance(updatedSentence.join(' '));
    window.speechSynthesis.speak(utterance);

    updateAvailableWords(word);
  };

  const updateAvailableWords = (word) => {
    if (sentence.length === 0 && initialWords.start.some(w => w.word === word)) {
      setAvailableWords(initialWords.action);
    } else if (initialWords.action.some(w => w.word === word)) {
      setAvailableWords(initialWords.object);
    } else if (initialWords.object.some(w => w.word === word)) {
      setAvailableWords(initialWords.end);
    } else if (initialWords.end.some(w => w.word === word)) {
      setAvailableWords([]);
    } else {
      setAvailableWords([]);
    }
  };

  const handleClear = () => {
    setSentence([]);
    setAvailableWords(initialWords.start);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300  flex flex-col items-center p-6">
        <div className="relative flex items-center justify-center w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 shadow-lg bg-gradient-to-r from-indigo-400 to-purple-400 text-white p-3 rounded-lg">
            AACS Notebook
          </h1>

          {/* Info icon with hover tooltip */}
          <FaInfoCircle
            className="absolute right-0 text-white text-3xl cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
          {showTooltip && (
            <div className="absolute right-0 top-12 mt-2 w-64 p-3 bg-white text-gray-900 rounded-lg shadow-lg text-sm">
              <strong>What is AACS?</strong><br />
              AACS (Augmentative and Alternative Communication Systems) helps individuals with communication difficulties to express themselves using various tools and strategies.
            </div>
          )}
        </div>

        {/* Sentence Display */}
        <div className="mb-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Sentence:</h2>
          <div
            className="text-xl font-medium text-gray-900 bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            style={{
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              maxHeight: '150px',
              overflowY: 'auto'
            }}
          >
            {sentence.join(' ')}
          </div>
        </div>

        {/* Word Options */}
        <div className="mb-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Available Words</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {availableWords.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-indigo-100 hover:shadow-2xl transform transition-all duration-300 hover:scale-110"
                onClick={() => handleWordClick(item.word)}
                style={{
                  maxWidth: '120px',
                  padding: '1rem',
                  textAlign: 'center'
                }}
              >
                <span className="text-4xl mb-2" role="img" aria-label={item.word}>
                  {item.emoji}
                </span>
                <p className="text-md font-medium text-gray-900 overflow-hidden text-ellipsis">
                  {item.word}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Button */}
        <button
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-all transform hover:scale-105 focus:outline-none shadow-lg"
          onClick={handleClear}
        >
          Clear Sentence
        </button>
      </div>
    </>
  );
};

export default SentenceBuilder;
