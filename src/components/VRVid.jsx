import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import videos directly
import chat_with_ana from '../assets/chat_with_ana.mp4';
import crosswalk from '../assets/crosswalk.mp4';
import jungle from '../assets/jungle.mp4';

const VRVids = () => {
  const { title } = useParams(); // Extract the `topicName` from the route
  const [videoSrc, setVideoSrc] = useState(''); // State to store the video source path

  useEffect(() => {
    // Map the topicName to the corresponding video
    switch (title) {
      case 'Meet-the-Animals':
        setVideoSrc(jungle);
        break;
      case 'Neighborhood-Crosswalk':
        setVideoSrc(crosswalk);
        break;
      case 'Cars-and-Roads':
        setVideoSrc(chat_with_ana);
        break;
      default:
        console.error(`No video found for: ${title}`);
    }
  }, [title]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VRVids;
