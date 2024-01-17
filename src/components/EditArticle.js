// src/components/EditArticle.js
import React, { useState } from 'react';


const EditArticle = ({ article, onSave }) => {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [category, setCategory] = useState(article.category);

  const handleSave = () => {
    onSave({
      id: article.id,
      title,
      content,
      category,
    });
  };

  return (
    <div>
      <h2>Edit Article</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button onClick={handleSave}>Publish</button>
      <button onClick={() => onSave({ ...article, status: 'draft' })}>Draft</button>
    </div>
  );
};

export default EditArticle;
