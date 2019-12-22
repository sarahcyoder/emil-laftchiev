import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children, title, height }) => {

  return (
    <>
      <Header title={title} height={height} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

Layout.defaultProps = {
  title: null,
  height: "25vh",
}

export default Layout
