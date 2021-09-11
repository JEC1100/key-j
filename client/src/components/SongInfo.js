import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
// run npm install uuid from command line

const SongInfo = (props) => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch('/api/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        songName: props.songTitle,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((jsonResponse) => setInitialState(jsonResponse.songs));
  }, [props.songTitle]);
  // Should change unique key value to use UUID
  return (
    // <div>
    //   {initialState.length > 0 &&
    //     initialState.map((e, i) => (
    //       <li key={i}>
    //         {e.name} by {e.artist}
    //       </li>
    //     ))}
    // </div>

    <div>
      {initialState.length > 0 &&
        initialState.map((e) => (
          <div key={uuidv4()}>
            <div>{e.name}</div>
            <div>{e.artist}</div>
          </div>
        ))}
    </div>
  );
};

SongInfo.propTypes = {
  props: PropTypes.func,
  songTitle: PropTypes.string,
};

export default SongInfo;
