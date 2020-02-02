import React from 'react';
import { Link } from 'gatsby';
import containerStyles from './menu.module.css';

const Menu = () => {

  const toggleMenu = () => {
    let menuLinks = document.getElementById("menuLinks");
    if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
    } else {
      menuLinks.style.display = "block";
    }
  }

  return (
    <div className={containerStyles.container}>
      <button className={containerStyles.menuIcon} onClick={() => toggleMenu()} onKeyDown={() => toggleMenu()}>&#9776;</button>
      <div id="menuLinks" className={containerStyles.menuLinks}>
        <Link to='/'>Home</Link>
        <Link to='/publications'>Publications</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Menu;
