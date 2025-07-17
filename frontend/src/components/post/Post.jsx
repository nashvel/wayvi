import React from 'react';
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowPathRoundedSquareIcon, ArrowUpTrayIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const Post = ({ post, onUpdate }) => {
  const { author, avatar, content, timestamp, isLiked, likes, comments, shares } = post;

  const handleLike = () => {
    const updatedPost = {
      ...post,
      isLiked: !post.isLiked,
      likes: post.isLiked ? post.likes - 1 : post.likes + 1,
    };
    onUpdate(updatedPost);
  };

  const handleShare = () => {
    const updatedPost = { ...post, shares: post.shares + 1 };
    onUpdate(updatedPost);
  };

  const [showComments, setShowComments] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      author: 'Wayvi', // Placeholder for logged-in user
      content: commentText,
    };
    const updatedPost = { ...post, comments: [...post.comments, newComment] };
    onUpdate(updatedPost);
    setCommentText('');
  };

  return (
    <div className="bg-white/50 backdrop-blur-lg p-4 border-b border-white/20 rounded-lg my-4 mx-2 shadow-sm">
      <div className="flex items-start">
        <img className="h-12 w-12 rounded-full mr-4" src={avatar} alt={`${author}'s avatar`} />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="font-bold text-black">{author}</p>
              <p className="text-sm text-gray-500">· {new Date(timestamp).toLocaleDateString()}</p>
            </div>
            <button className="text-gray-500 hover:text-blue-500">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 text-black">{content}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-around text-gray-500">
        <button onClick={() => setShowComments(!showComments)} className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
          <ChatBubbleOvalLeftIcon className="h-5 w-5" />
          <span>{post.comments.length}</span>
        </button>
        <button onClick={handleLike} className="flex items-center space-x-2 hover:text-green-500 transition-colors group">
          {isLiked ? (
            <HeartIconSolid className="h-5 w-5 text-green-500" />
          ) : (
            <HeartIcon className="h-5 w-5 group-hover:text-green-500" />
          )}
          <span className="text-sm group-hover:text-green-500">{likes}</span>
        </button>
        <button onClick={handleShare} className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
          <ArrowUpTrayIcon className="h-5 w-5 group-hover:text-red-500" />
          <span className="text-sm group-hover:text-red-500">{shares}</span>
          <ShareIcon className="h-5 w-5 group-hover:text-red-500" />
          <span className="text-sm group-hover:text-red-500">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
