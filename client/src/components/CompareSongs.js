import React from 'react';
import { useParams } from "react-router-dom"

export const CompareSongs = () => {
  let params = useParams()
  console.log(params)
  return(<div>Hello</div>)
}
