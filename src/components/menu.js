import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/'>Publications</Link>
      <Link to='/'>Teaching</Link>
      <Link to='/'>Contact</Link>
    </div>
  );
};

export default Menu;
