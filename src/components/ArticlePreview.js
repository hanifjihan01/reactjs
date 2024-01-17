// src/components/ArticlePreview.js
import React from 'react';

const ArticlePreview = ({ article }) => {
  return (
    <div className="ArticlePreview">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p><strong>Category:</strong> {article.category}</p>
    </div>
  );
};

export default ArticlePreview;
