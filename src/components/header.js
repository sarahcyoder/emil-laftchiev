import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, height, background }) => (

  <header
    style={{
      backgroundImage: background,
      marginBottom: `1.45rem`,
      height: height,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2>Emil Laftchiev</h2>
      <h1 style={{
        margin: 0,
        position: `absolute`,
        top: `40%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
      }}>
        <Link
          to="/"
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
)

Header.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
}

Header.defaultProps = {
  title: null,
  height: "50vh",
  background: "#015668"
}

export default Header
