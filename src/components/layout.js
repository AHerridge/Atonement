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
      <React.Fragment>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Qwigley&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </head>
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
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
