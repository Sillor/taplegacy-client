import React from 'react';

function Clicker({ taps, addTaps, countedCps, buttonClicked }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 md:max-w-[40vw] lg:max-w-[30vw] md:h-[80vh] w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white">
      <h2 className="mb-4 text-2xl font-bold text-center">
        {Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 3,
        }).format(taps)}{' '}
        TAPS
      </h2>
      <button
        className="w-full p-6 text-5xl font-extrabold border-2 border-white-400 rounded-xl hideoverlay bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm active:text-4xl h-24 transition hover:scale-105"
        onClick={() => {
          addTaps(1);
          buttonClicked();
        }}
      >
        TAP!
      </button>
      <p
        className={`mt-4 text-lg ${
          countedCps > 0 ? 'text-green-500 font-bold' : ''
        }`}
      >
        +
        {Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 3,
        }).format(countedCps)}{' '}
        taps / second
      </p>
    </div>
  );
}

export default Clicker;
