import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ title, height, background, link }) => {
  const backgroundImage = 'url(' + background + ')';

  return (
    <>
    <header
      style={{
        backgroundImage: backgroundImage,
        marginBottom: `1.45rem`,
        height: height,
        position: `relative`,
        backgroundColor: `#015668`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h2
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: `#ffffff`,
            position: `absolute`,
            padding: `1.45rem`,
            top: 0,
            left: 0,
          }}>
          Emil Laftchiev
        </h2>
        <h1 style={{
          margin: 0,
          position: `absolute`,
          top: `55%`,
          left: 0,
          right: 0,
          textAlign: `center`,
          width: `100%`,
          padding: `0 230px`
        }}>
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
      </div>
    </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}

Header.defaultProps = {
  title: null,
  height: "50vh",
  background: "#015668",
  link: window.location.pathname,
}

export default Header
