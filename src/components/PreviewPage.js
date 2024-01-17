// src/components/PreviewPage.js
import React, { useState } from 'react';
import ArticlePreview from './ArticlePreview';

const articlesData = [
  { id: 1, title: 'Published Post 1', content: 'Lorem ipsum...', category: 'React', status: 'published' },
  // Add more published articles
];

const PAGE_SIZE = 2;

const PreviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = articlesData.filter(article => article.status === 'published');
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {paginatedArticles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PreviewPage;
