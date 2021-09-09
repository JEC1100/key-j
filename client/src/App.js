import React from 'react';
import Searchbar from './Searchbar';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Key-J</h1>
      <Searchbar handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
