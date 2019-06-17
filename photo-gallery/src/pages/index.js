import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import {connect } from 'react-redux'

const IndexPage = ({tripNumber, dispatch}) => (
  <Layout>
    <Gallery></Gallery>
  </Layout>
)

export default connect(state => ({
  tripNumber: state.app.tripNumber
}), null)(IndexPage)
