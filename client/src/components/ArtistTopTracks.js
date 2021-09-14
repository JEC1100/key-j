import React from 'react';
import {useEffect} from 'react';
import { useParams } from "react-router-dom"

export const ArtistTopTracks = () => {
  
  const params = useParams()

  useEffect(() => {
    fetch('/api/artist_top_tracks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        song: params.artistId
      })
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.log(res)
      }
    }).then(response => console.log(response))
  },[])

  return(
    <div>Hello!</div>
  )
  // return(
  //   <div>
  //   {state.length > 0 &&
  //     state.map((e, i) => (
  //       <li key={i}>
  //         <a href={'/' + songid + '/' + e.id} key="audio-features">
  //           {e.name} by {e.artist}
  //         </a>
  //       </li>
  //     ))}
  // </div>)
}


  export default ArtistTopTracks;
