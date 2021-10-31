import React from 'react';
import NavBar from '../../components/Navbar/Navbar';

const Hompage =({title,style})  => {
  return (
    <div>
      <NavBar />
      <h1>{title='Home'}</h1>
    </div>
  );
}

export default Hompage;