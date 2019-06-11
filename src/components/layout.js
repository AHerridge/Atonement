/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Container from "react-bootstrap/Container"

import bgImg from "../images/dust_scratches.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            className="text-center"
            style={{
              margin: `0px auto`,
              padding: `2rem 20px 2rem`,
              backgroundColor: `white`,
            }}
          >
            <main>{children}</main>
          </div>
        </Container>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
