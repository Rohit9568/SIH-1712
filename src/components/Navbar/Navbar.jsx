import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown for Features
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
            </a>
          </div>

          <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
            </svg>
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            

          <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>
            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>
            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Library </a>
            <div className="relative group">
                
              <button
                onClick={toggleDropdown}
                className="flex items-center text-base text-black transition-all duration-200 hover:text-opacity-80 focus:outline-none"
              >
                Activities
                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`z-10 absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Link to="/pecs" className="block px-4 py-2 text-black hover:bg-gray-100">PECS</Link>
                <Link to="/aacs" className="block px-4 py-2 text-black hover:bg-gray-100">AACS</Link>
                <Link to="/interactive-learning-module" className="block px-4 py-2 text-black hover:bg-gray-100">Interactive Learning</Link>
                <Link to="/storybook" className="block px-4 py-2 text-black hover:bg-gray-100">Storybook</Link>
              </div>
            </div>
          </div>

          <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Join Now </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
