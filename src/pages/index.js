import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Machine Learning, Predictive Modeling, Time Series</h2>
    <p>Emil Laftchiev currently works in the Data Analytics group at Mitsubishi Electric Research Laboratories. Emil's research focuses on Machine Learning, Data Mining techniques in anomaly detection, time series analytics, and predictive modeling. His most recent publication is 'An IoT system to estimate personal thermal comfort'.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
