import React from 'react';
import Searchbar from './Searchbar';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="app">
      <h1>Key-J</h1>
      <div className="searchbar">
        <Searchbar handleSubmit={handleSubmit} />
      </div>
      <div className="info-table">
       

      </div>
    </div>
  );
};

export default App;
