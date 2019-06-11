import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import banner from "../images/header-wrap.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <h1
      style={{
        backgroundImage: `url(${banner})`,
        margin: 0,
        height: 150,
        lineHeight: "150px",
        textAlign: "center",
        color: "white",
        fontStyle: "italic",
        fontFamily: "Qwigley, Arial, Helvetica, Sans-Serif"
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
