import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children, headerData }) => {
  
  return (
    <>
      <Header {...headerData} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
          © {new Date().getFullYear()}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.object,
};

Layout.defaultProps = {
  headerData: {},
};

export default Layout
