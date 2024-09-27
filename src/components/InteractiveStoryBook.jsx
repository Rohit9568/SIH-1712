import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Navbar from './Navbar/Navbar';

const storyContent = [
  { type: 'text', content: 'Once', speech: 'Once', description: 'A starting word often used to introduce a story.' },
  // (Other words in the story...)
  { type: 'text', content: 'upon', speech: 'upon', description: 'Indicates a moment in time.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'time', speech: 'time', description: 'A continuous sequence of events.' },
  { type: 'text', content: 'in', speech: 'in', description: 'A preposition used to indicate location or time.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'faraway', speech: 'faraway', description: 'At a great distance.' },
  { type: 'text', content: 'land', speech: 'land', description: 'A country or region.' },
  { type: 'text', content: 'there', speech: 'there', description: 'Refers to a place or position.' },
  { type: 'text', content: 'was', speech: 'was', description: 'Past tense of “is”, indicating something that existed.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'magical', speech: 'magical', description: 'Something enchanting or supernatural.' },
  { type: 'text', content: 'place', speech: 'place', description: 'A particular position or point in space.' },
  { type: 'text', content: 'where', speech: 'where', description: 'Refers to a place or location.' },
  { type: 'text', content: 'animals', speech: 'animals', description: 'Living creatures that are not plants or humans.' },
  { type: 'text', content: 'could', speech: 'could', description: 'Past tense of “can”, indicating ability or possibility.' },
  { type: 'text', content: 'talk', speech: 'talk', description: 'To speak or communicate with words.' },
  { type: 'text', content: 'One', speech: 'One', description: 'Refers to a single unit or thing.' },
  { type: 'text', content: 'day', speech: 'day', description: 'A period of 24 hours.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'young', speech: 'young', description: 'Having lived or existed for a short time.' },
  { type: 'text', content: 'girl', speech: 'girl', description: 'A female child.' },
  { type: 'text', content: 'named', speech: 'named', description: 'To give a name to someone or something.' },
  { type: 'text', content: 'Ella', speech: 'Ella', description: 'A proper noun used as a name.' },
  { type: 'text', content: 'found', speech: 'found', description: 'Past tense of “find”, indicating discovery.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'mysterious', speech: 'mysterious', description: 'Something that is difficult to understand or explain.' },
  { type: 'text', content: 'box', speech: 'box', description: 'A container typically made of cardboard or wood.' },
  { type: 'text', content: 'Inside', speech: 'Inside', description: 'The inner part of something.' },
  { type: 'text', content: 'the', speech: 'the', description: 'A definite article used to specify a noun.' },
  { type: 'text', content: 'box', speech: 'box', description: 'A container typically made of cardboard or wood.' },
  { type: 'text', content: 'she', speech: 'she', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'discovered', speech: 'discovered', description: 'Found out or learned about something.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'hidden', speech: 'hidden', description: 'Something concealed or not visible.' },
  { type: 'text', content: 'key', speech: 'key', description: 'A small metal instrument used to open locks.' },
  { type: 'text', content: 'With', speech: 'With', description: 'Accompanied by or using something.' },
  { type: 'text', content: 'the', speech: 'the', description: 'A definite article used to specify a noun.' },
  { type: 'text', content: 'key', speech: 'key', description: 'A small metal instrument used to open locks.' },
  { type: 'text', content: 'in', speech: 'in', description: 'A preposition used to indicate location or time.' },
  { type: 'text', content: 'hand', speech: 'hand', description: 'The part of the body at the end of the arm.' },
  { type: 'text', content: 'she', speech: 'she', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'felt', speech: 'felt', description: 'Experienced an emotion or physical sensation.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'sense', speech: 'sense', description: 'A feeling or perception.' },
  { type: 'text', content: 'of', speech: 'of', description: 'Indicates association or belonging.' },
  { type: 'text', content: 'adventure', speech: 'adventure', description: 'An unusual, exciting, and possibly dangerous experience.' },
  { type: 'text', content: 'And', speech: 'And', description: 'A conjunction used to connect words or sentences.' },
  { type: 'text', content: 'so', speech: 'so', description: 'A conjunction used to show consequence or purpose.' },
  { type: 'text', content: 'she', speech: 'she', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'set', speech: 'set', description: 'Put in a specified position or state.' },
  { type: 'text', content: 'off', speech: 'off', description: 'Away from a particular place or position.' },
  { type: 'text', content: 'on', speech: 'on', description: 'Indicates position or state.' },
  { type: 'text', content: 'her', speech: 'her', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'journey', speech: 'journey', description: 'The act of traveling from one place to another.' },
  { type: 'text', content: 'into', speech: 'into', description: 'Indicates movement or direction towards something.' },
  { type: 'text', content: 'the', speech: 'the', description: 'A definite article used to specify a noun.' },
  { type: 'text', content: 'unknown', speech: 'unknown', description: 'Not known or familiar.' },
  { type: 'text', content: 'With', speech: 'With', description: 'Accompanied by or using something.' },
  { type: 'text', content: 'her', speech: 'her', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'courage', speech: 'courage', description: 'The ability to confront fear or adversity.' },
  { type: 'text', content: 'and', speech: 'and', description: 'A conjunction used to connect words or sentences.' },
  { type: 'text', content: 'curiosity', speech: 'curiosity', description: 'A strong desire to know or learn something.' },
  { type: 'text', content: 'she', speech: 'she', description: 'A pronoun used to refer to a female.' },
  { type: 'text', content: 'embarked', speech: 'embarked', description: 'Started a journey or adventure.' },
  { type: 'text', content: 'on', speech: 'on', description: 'Indicates position or state.' },
  { type: 'text', content: 'a', speech: 'a', description: 'An article used to modify nouns.' },
  { type: 'text', content: 'quest', speech: 'quest', description: 'A long or arduous search for something.' },
  { type: 'text', content: 'to', speech: 'to', description: 'Indicates direction or purpose.' },
  { type: 'text', content: 'discover', speech: 'discover', description: 'To find or learn something new.' },
  { type: 'text', content: 'the', speech: 'the', description: 'A definite article used to specify a noun.' },
  { type: 'text', content: 'secrets', speech: 'secrets', description: 'Things kept hidden or unknown.' },
  { type: 'text', content: 'of', speech: 'of', description: 'Indicates association or belonging.' },
  { type: 'text', content: 'the', speech: 'the', description: 'A definite article used to specify a noun.' },
  { type: 'text', content: 'magical', speech: 'magical', description: 'Something enchanting or supernatural.' },
  { type: 'text', content: 'land', speech: 'land', description: 'A country or region.' },
  { type: 'text', content: ' ', speech: '', description: '' }
];

const InteractiveStorybook = () => {
    const [hoveredWord, setHoveredWord] = useState('');
    const [showTooltip, setShowTooltip] = useState(false); // To toggle the tooltip for the info icon

    const speakWord = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    };

    const handleMouseEnter = (text) => {
      setHoveredWord(text);
      speakWord(text);
    };

    const handleMouseLeave = () => {
      setHoveredWord('');
    };

    const handleInfoMouseEnter = () => {
      setShowTooltip(true);
    };

    const handleInfoMouseLeave = () => {
      setShowTooltip(false);
    };

    return (
      <>
        <Navbar />
        <div className="max-w-3xl mx-auto my-8 p-6 rounded-lg bg-purple-200 shadow-md">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-700 mr-4">Storytelling</h1>
            <div className="relative">
              <FaInfoCircle
                size={24}
                className="text-blue-500 cursor-pointer"
                onMouseEnter={handleInfoMouseEnter}
                onMouseLeave={handleInfoMouseLeave}
              />
              {showTooltip && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
                  <p className="text-sm text-gray-600 flex" >
                    Storybooks are a great tool for enhancing the social and communication skills of children with ASD.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="text-lg leading-relaxed">
            {storyContent.map((item, index) => (
              <span
                key={index}
                className={`inline-block m-2 p-2 rounded-md transition-transform duration-300 cursor-pointer ${
                  hoveredWord === item.speech ? 'bg-blue-200 text-blue-700 scale-110' : 'text-gray-700'
                }`}
                onMouseEnter={() => handleMouseEnter(item.speech)}
                onMouseLeave={handleMouseLeave}
              >
                {item.content}
              </span>
            ))}
          </div>
        </div>
      </>
    );
};

export default InteractiveStorybook;
