import React from 'react';
import { Hello } from './components/hello';
import Searchbar from './components/Searchbar';

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Key-J</h1>
      <Searchbar handleSubmit={handleSubmit} />
      <Hello />
    </div>
  );
};

export default App;
