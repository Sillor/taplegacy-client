import React from 'react';

function Achievement({ title, description, completed }) {
  return (
    <div
      className={`p-4 upgrade rounded-md bg-opacity-10 border transition hover:scale-105 flex-shrink-1 w-full`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div
          className={`text-xl ${
            completed ? 'text-green-500' : 'text-gray-500'
          }`}
        >
          {completed ? '✅' : '❌'}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
