import React, { useState, useEffect } from 'react';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

const Home = () => {
  const [activeTab, setActiveTab] = useState('for-you');
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on initial render
  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Set initial posts if nothing is in localStorage
      setPosts([
        {
          id: 1,
          author: 'nacht',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          content: 'Just set up my new Wayvi dashboard! The new UI is looking slick. 🔥',
          timestamp: new Date().toISOString(),
          likes: 5,
          shares: 2,
          comments: [],
          isLiked: false,
        },
        {
          id: 2,
          author: 'angel',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          content: 'Excited to see how we can leverage the new social features for our community engagement. Great work, team!',
          timestamp: new Date().toISOString(),
          likes: 12,
          shares: 3,
          comments: [
            { author: 'Wayvi', content: 'Great idea!' }
          ],
          isLiked: true,
        },
      ]);
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: Date.now(),
      author: 'Wayvi', // Placeholder for logged-in user
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
      content,
      timestamp: new Date().toISOString(),
      likes: 0,
      shares: 0,
      comments: [],
      isLiked: false,
    };
    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  return (
    <div className="bg-white text-black">
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="flex mt-4">
          <div className="flex-1 text-center font-bold p-3 border-b-2 border-blue-500">
            For you
          </div>
          <div className="flex-1 text-center text-gray-500 p-3">
            Market
          </div>
        </div>
      </div>
      
      <CreatePost onPost={handleCreatePost} />

      <div className="border-t border-gray-200">
          {posts.map((post) => (
            <Post key={post.id} post={post} onUpdate={handleUpdatePost} />
          ))}
        </div>
    </div>
  );
};

export default Home;
