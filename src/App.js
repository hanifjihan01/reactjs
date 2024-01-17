// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import AddNewArticle from './components/AddNewArticle';
import './App.css';

function App() {
  const [showAddNew, setShowAddNew] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleAddNewSave = (newArticle) => {
    setArticles([...articles, newArticle]);
    setShowAddNew(false);
  };

  return (
    <div className="App">
      <Dashboard />
      <button onClick={() => setShowAddNew(true)}>Add New Article</button>
      {showAddNew && <AddNewArticle onSave={handleAddNewSave} />}
    </div>
  );
}

export default App;
