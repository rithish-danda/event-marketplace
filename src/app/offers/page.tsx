// Use client-side rendering for this component
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const tokens = [
  'APPLE-1234',
  'BANANA-5678',
  'CHERRY-9012',
  'DATE-3456',
  'EGGPLANT-7890',
  'FIG-2134',
  'GRAPE-6578',
  'HONEYDEW-0912',
  'KIWI-4356',
  'LEMON-8790',
];

const GridBox = ({ index }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleClick = () => {
    setIsClicked(true);
    setToken(tokens[Math.floor(Math.random() * tokens.length)]);
  };

  return (
    <div
      className="grid-box"
      onClick={handleClick}
      style={{ border: '1px solid #ddd', padding: 10 }}
    >
      {isClicked ? (
        <p>{token}</p>
      ) : (
        <p>Offer {index + 1}</p>
      )}
    </div>
  );
};

export default function Home() {
  const [showGrid, setShowGrid] = useState(true); // State variable for grid visibility

  const toggleGrid = () => {
    setShowGrid(!showGrid); // Toggle grid visibility on button click
  };

  return (
    <div className="container">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">Home</code>
          </p>
        </Link>
        {/* Button to toggle grid visibility */}
        <button onClick={toggleGrid}>
          {showGrid ? 'Hide Grid' : 'Show Grid'}
        </button>
      </div>
      {showGrid && ( // Conditionally render the grid based on showGrid state
        <div className="grid w-auto mb-32">
          {[...Array(10)].map((_, index) => (
            <GridBox key={index} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
