// src/components/AddNewArticle.js
import React, { useState } from 'react';
import '../App.css';

const AddNewArticle = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = (status) => {
    onSave({
      title,
      content,
      category,
      status,
    });

    // Reset the form fields after saving
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <div>
      <h2>Add New Article</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button onClick={() => handleSave('published')}>Publish</button>
      <button onClick={() => handleSave('draft')}>Draft</button>
    </div>
  );
};

export default AddNewArticle;
