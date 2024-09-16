import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">AACS Notebook</h1>

      {/* Sentence Display */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Sentence:</h2>
        <div className="text-xl font-medium text-gray-800 bg-white p-4 rounded-lg shadow-lg">
          {sentence.join(' ')}
        </div>
      </div>

      {/* Word Options */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Available Words</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {availableWords.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-blue-100"
              onClick={() => handleWordClick(item.word)}
            >
              <span className="text-4xl mb-2" role="img" aria-label={item.word}>
                {item.emoji}
              </span>
              <p className="text-lg font-medium text-gray-800">{item.word}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        onClick={handleClear}
      >
        Clear Sentence
      </button>
    </div>
    </>
  );
};

export default SentenceBuilder;
