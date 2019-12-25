import React from 'react';
import { Link } from 'gatsby';
import containerStyles from './menu.module.css';

const Menu = () => {

  return (
    <div className={containerStyles.container}>
      <Link to='/'>Home</Link>
      <Link to='/'>Publications</Link>
      <Link to='/'>Teaching</Link>
      <Link to='/'>Contact</Link>
    </div>
  );
};

export default Menu;
