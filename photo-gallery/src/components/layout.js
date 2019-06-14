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
      <>
        <Header style={{
           backgroundColor: 'blue'
          }} siteTitle={data.site.siteMetadata.title} />
        <div
          // style={{
          //   margin: `0 auto`,
          //   padding: `0px 1.0875rem 1.45rem`,
          //   paddingTop: 0,
          // }}
        >
          <main>{children}</main>
          
        </div>
        {/* <footer
           style={{
            position: 'fixed',
            bottom:0,
            left: '40%',
            paddingTop: '20px'
          }}
          >
          <p id="copyright">Copyright © Nicholas Torres  {new Date().getFullYear()}</p>
          </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
