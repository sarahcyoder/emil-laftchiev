import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import containerStyles from "./header.module.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ title, subTitle, height, background, color, link }) => {
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
          <h1 className={containerStyles.hero}>
            <Link
              to={link}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {title}
            </Link>
          </h1>
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
  link: PropTypes.string,
  color: PropTypes.string,
}

Header.defaultProps = {
  title: null,
  subTitle: null,
  height: "50vh",
  background: "#1B2A49",
  link: window.location.pathname,
  color: "#1B2A49",
}

export default Header
