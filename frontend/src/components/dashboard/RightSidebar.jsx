import React from 'react';
import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const TrendingItem = ({ category, title, posts }) => (
  <li className="py-3 hover:bg-gray-200 px-4 cursor-pointer">
    <div className="flex justify-between items-center">
      <div>
        <div className="text-sm text-gray-500">{category}</div>
        <div className="font-bold text-black">{title}</div>
        <div className="text-sm text-gray-500">{posts}</div>
      </div>
      <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
    </div>
  </li>
);

const FollowItem = ({ name, handle, avatar }) => (
  <li className="py-3 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer">
    <div className="flex items-center">
      <img className="h-10 w-10 rounded-full mr-3" src={avatar} alt={`${name}'s avatar`} />
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500">{handle}</div>
      </div>
    </div>
    <button className="bg-black text-white font-bold py-1 px-4 rounded-full">Follow</button>
  </li>
);

const RightSidebar = () => {
  const trendingTopics = [
    { category: 'Trending in Philippines', title: '#AndresSigningOff', posts: '4,888 posts' },
    { category: 'Trending in Philippines', title: 'APOLOGIZE TO SEVENTEEN', posts: '49.7K posts' },
    { category: 'Politics · Trending', title: 'President Muhammadu Buhari', posts: '56.9K posts' },
  ];

  const whoToFollow = [
    { name: 'React', handle: '@reactjs', avatar: 'https://pbs.twimg.com/profile_images/446356636710363136/KpdzmV8a_400x400.jpeg' },
    { name: 'Tailwind CSS', handle: '@tailwindcss', avatar: 'https://pbs.twimg.com/profile_images/1468993891584024579/s_G9-I1I_400x400.jpg' },
  ];

  return (
    <aside className="bg-white text-black p-4 space-y-4">
      <div className="relative">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute top-1/2 left-4 -translate-y-1/2" />
        <input type="text" placeholder="Search" className="w-full bg-gray-100 rounded-full py-2 pl-12 pr-4" />
      </div>

      <div className="bg-gray-100 rounded-xl">
        <h2 className="font-bold text-xl p-4">Subscribe to Premium</h2>
        <p className="px-4 pb-4">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <div className="px-4 pb-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Subscribe</button>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <h2 className="font-bold text-xl p-4">What's happening</h2>
        <ul>
          {trendingTopics.map((topic, index) => (
            <TrendingItem key={index} {...topic} />
          ))}
        </ul>
        <div className="p-4 hover:bg-gray-200 cursor-pointer">
          <a href="#" className="text-blue-500">Show more</a>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <h2 className="font-bold text-xl p-4">Who to follow</h2>
        <ul>
          {whoToFollow.map((user, index) => (
            <FollowItem key={index} {...user} />
          ))}
        </ul>
        <div className="p-4 hover:bg-gray-200 cursor-pointer">
          <a href="#" className="text-blue-500">Show more</a>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
