import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ title, subTitle, height, background, color, link }) => {
  const backgroundImage = 'url(' + background + ')';

  return (
    <>
    <header
      style={{
        backgroundImage: backgroundImage,
        marginBottom: `1.45rem`,
        height: height,
        position: `relative`,
        backgroundColor: color,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          height: height,
        }}
        id='overlay'
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
        <div style={{
          margin: 0,
          position: `absolute`,
          top: `40%`,
          left: 0,
          right: 0,
          textAlign: `center`,
          width: `100%`,
          padding: `0 100px`
        }}>
          <h1>
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
          <h2 style={{
            color: `white`,
            textDecoration: `none`,
          }}>
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
