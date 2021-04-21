import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

function Error() {

  return (
    <div className='about'>
      <h1>You got lost my friend</h1>
      <h4>This page doesn't exist</h4>
      <Link to='/' className="btn btn-dark">Back</Link>
    </div>
  );
}

export default Error;