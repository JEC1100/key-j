import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = (props) => {
  const [songname, setSongname] = useState({ value: '' });

  const handleChange = (event) => {
    event.preventDefault();
    setSongname({ value: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(songname)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div className="search-bar">
        <input
          className="text-field"
          type="text"
          value={songname.value}
          onChange={handleChange}
          id="songname"
          placeholder="Type the song title here..."
        />
        <input className="submit" type="submit" value="Submit" />
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  props: PropTypes.func,
  submit: PropTypes.func
}
export default Searchbar;
