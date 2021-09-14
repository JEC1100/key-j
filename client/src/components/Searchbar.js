import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Searchbar = (props) => {
  const [songname, setSongname] = useState('');
  let history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setSongname(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(songname);
    if(props.redirect){
    history.push("/tracks/" + songname);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <label htmlFor="songname">Song name</label>
      <input
        type="text"
        value={songname}
        onChange={handleChange}
        id="songname"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

Searchbar.propTypes = {
  props: PropTypes.func,
  submit: PropTypes.func,
  redirect: PropTypes.bool,
};
export default Searchbar;
