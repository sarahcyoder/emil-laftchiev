import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, height }) => (
  <header
    style={{
      background: `#015668`,
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
      <h1 style={{ margin: 0 }}>
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
}

Header.defaultProps = {
  title: null,
  height: "50vh",
}

export default Header
