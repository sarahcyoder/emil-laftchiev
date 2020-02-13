import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import containerStyles from "./header.module.css"

const Header = ({ title, subTitle, height, background, color }) => {
  const backgroundImage = 'url(' + background + ')';

  return (
    <>
    <header
      className={containerStyles.header}
      style={{
        backgroundImage: backgroundImage,
        height: height,
        backgroundColor: color,
      }}
    >
      <div
        style={{
          height: height,
        }}
        className={containerStyles.header}
        id='overlay'
      >
        <h2 className={containerStyles.name}>
          Emil Laftchiev
        </h2>
        <div className={containerStyles.headerText}>
          <h1 className={containerStyles.hero}>{title}</h1>
          <h2  className={containerStyles.subtitle}>
            {subTitle}
          </h2>
        </div>
      </div>
    </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
}

Header.defaultProps = {
  title: null,
  subTitle: null,
  height: "50vh",
  background: "#1B2A49",
  color: "#1B2A49",
}

export default Header
