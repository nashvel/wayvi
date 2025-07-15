import React, { useState } from 'react';
import { UsersIcon, MapIcon, CogIcon } from '@heroicons/react/24/outline';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

const initialPosts = [
  {
    id: 1,
    author: 'Buang Na User',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: 'Just set up my new Wayvi dashboard! The new UI is looking slick. 🔥',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    likes: 12,
    comments: [],
  },
  {
    id: 2,
    author: 'Ovulation Girl',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    content: 'Excited to see how we can leverage the new social features for our community engagement. Great work, team!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    likes: 45,
    comments: [],
  },
];

const SuperadminDashboard = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="bg-gray-100 text-gray-800 p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Home</h1>
      <p className="mt-2 text-gray-600">See what's new in your network.</p>

      <div className="mt-8">
        <CreatePost onPost={handlePost} />
      </div>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SuperadminDashboard;

