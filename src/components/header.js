import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import banner from "../images/header-wrap.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <h1
      style={{
        backgroundImage: `url(${banner})`,
        margin: 0,
        height: 150,
        lineHeight: "150px",
        textAlign: "center",
        color: "white",
        fontFamily: "Qwigley, Arial, Helvetica, Sans-Serif",
        fontSize: 80
      }}
    >
      Atonement Lutheran Church and Preschool
    </h1>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
