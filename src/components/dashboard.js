// src/components/Dashboard.js
import React, { useState } from 'react';
import PostList from './PostList';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('published');

  const tabs = ['published', 'drafts', 'trashed'];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
      <PostList tab={activeTab} />
    </div>
  );
};

export default Dashboard;
