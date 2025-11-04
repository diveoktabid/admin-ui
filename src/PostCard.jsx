import React, { useState } from 'react';

const PostCard = ({ title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col w-full p-6 rounded-lg border-2 border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-black hover:bg-rose-50">

      <h3 className="text-sm font-bold text-gray-800 mb-3 line-clamp-2 h-10">
        {title}
      </h3>

      <p className="text-xs text-gray-600 mb-4 flex-grow line-clamp-4 h-16">
        {body}
      </p>

      <button
        onClick={handleButtonClick}
        className={`w-full py-2 px-4 rounded-md font-semibold text-xs transition-all duration-300 ${
          isClicked
            ? 'bg-red-700 text-white hover:bg-red-500'
            : 'bg-gray-600 text-white hover:bg-gray-400'
        }`}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
};

export default PostCard;