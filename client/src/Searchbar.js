import React, { useState } from 'react';

const Searchbar = () => {
  const [songname, setSongname] = useState({ value: '' });

  const handleChange = (event) => {
    setSongname({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
