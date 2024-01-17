// src/components/PostList.js
import React from 'react';
import EditArticle from './EditArticle';
import  { useState } from 'react';


const PostList = ({ tab }) => {
    const postsData = {
        published: [
          { id: 1, title: 'Published Post 1', content: 'Lorem ipsum...', category: 'React' },
          // Add more published posts
        ],
        drafts: [
          { id: 2, title: 'Draft Post 1', content: 'Lorem ipsum...', category: 'JavaScript' },
          // Add more draft posts
        ],
        trashed: [
          { id: 3, title: 'Trashed Post 1', content: 'Lorem ipsum...', category: 'CSS' },
          // Add more trashed posts
        ],
      };
    
      const [editingArticle, setEditingArticle] = useState(null);
    
      const handleEditClick = (article) => {
        setEditingArticle(article);
      };
      const handleTrashClick = (article) => {
        const updatedPosts = postsData[tab].filter((post) => post.id !== article.id);
        article.status = 'trashed';
    
        postsData.trashed.push(article);
    
        // Update the state with the modified data
        setEditingArticle(null);
      };
      const handleEditCancel = () => {
        setEditingArticle(null);
      };
    
      const handleSaveEdit = (editedArticle) => {
        // Handle saving the edited article data (you can update your data store here)
        console.log('Saving edited article:', editedArticle);
    
        // Clear the editing state
        setEditingArticle(null);
      };
  const posts = postsData[tab];

  return (
    <div>
    <table className="post-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>
            <span className="action-icon" onClick={() => handleEditClick(post)}>
                  Edit
                </span>
                <span className="action-icon" onClick={() => handleTrashClick(post)}>
                  Trash
                </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
     {editingArticle && (
        <EditArticle article={editingArticle} onSave={handleSaveEdit} onCancel={handleEditCancel} />
      )}
    </div>
  );
};

export default PostList;
