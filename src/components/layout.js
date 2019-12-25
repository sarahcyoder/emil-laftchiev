import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children, title, height, background }) => {
  const backgroundImage = 'url(' + background + ')';

  return (
    <>
      <Header title={title} height={height} background={backgroundImage}/>
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
      </div>
      <footer>
          © {new Date().getFullYear()}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  background: PropTypes.string,
}

Layout.defaultProps = {
  title: null,
  height: "25vh",
  background: "#015668"
}

export default Layout
