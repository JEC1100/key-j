import React, { useState } from 'react';

const Searchbar = ({ handleSubmit }) => {
  const [songname, setSongname] = useState({ value: '' });

  const handleChange = (event) => {
    event.preventDefault();
    setSongname({ value: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <label htmlFor="songname">Song name</label>
      <input
        type="text"
        value={songname.value}
        onChange={handleChange}
        id="songname"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Searchbar;
