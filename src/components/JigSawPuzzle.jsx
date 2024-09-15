// src/components/JigsawPuzzle.jsx
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import image from "../assets/jungle.jpeg"

const JigsawPuzzle = () => {
  const imageSrc = {image};  // Replace with the path to your image
  const pieceCount = 20;  // Number of puzzle pieces
  const pieceWidth = 100;  // Width of each piece
  const pieceHeight = 100; // Height of each piece

  // Function to generate puzzle pieces
  const generatePuzzlePieces = () => {
    const pieces = [];
    const rows = Math.sqrt(pieceCount);
    const cols = rows;

    for (let i = 0; i < pieceCount; i++) {
      const x = (i % cols) * pieceWidth;
      const y = Math.floor(i / cols) * pieceHeight;
      pieces.push({
        id: i,
        left: x,
        top: y,
        background: `url(${imageSrc}) -${x}px -${y}px`,
        position: { x: Math.random() * 500, y: Math.random() * 500 },  // Random initial position
      });
    }
    return pieces;
  };

  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    setPieces(generatePuzzlePieces());
  }, []);

  return (
    <div style={{ width: '600px', height: '600px', position: 'relative', border: '2px solid #ddd', overflow: 'hidden' }}>
      {pieces.map(piece => (
        <Draggable
          key={piece.id}
          defaultPosition={piece.position}
          bounds="parent"
        >
          <div
            style={{
              width: pieceWidth,
              height: pieceHeight,
              background: piece.background,
              backgroundSize: `${pieceWidth}px ${pieceHeight}px`,
              position: 'absolute',
              cursor: 'move',
            }}
          />
        </Draggable>
      ))}
    </div>
  );
};

export default JigsawPuzzle;
