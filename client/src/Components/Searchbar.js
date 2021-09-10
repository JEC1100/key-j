import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
// need to check this validation is correct!
Searchbar.propTypes = {
  handleSubmit: PropTypes.func
}
export default Searchbar;
