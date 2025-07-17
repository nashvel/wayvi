import React, { useState } from 'react';
import { UserIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const CreatePost = ({ onPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <div className="bg-white/50 backdrop-blur-lg p-4 border-b border-white/20 rounded-lg my-4 mx-2 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start">
          <img className="h-12 w-12 rounded-full mr-4" src="/logo.png" alt="Your avatar" />
          <textarea
            className="w-full bg-white text-black placeholder-gray-500 text-xl focus:outline-none resize-none"
            rows="1"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2 text-blue-500">
            <button type="button" className="hover:bg-blue-100 rounded-full p-2 transition-colors"><PhotoIcon className="h-5 w-5" /></button>
            <button type="button" className="hover:bg-blue-100 rounded-full p-2 transition-colors"><VideoCameraIcon className="h-5 w-5" /></button>
          </div>
          <button 
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!content.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
