import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PublicationsList from "../components/publicationsList"

export default ({ data }) => {

  const publications = data.allNodePublications;
  
  return (<Layout title="Emil Laftchiev" height="50vh">
    <SEO title="Home" />
    <h2>Machine Learning, Predictive Modeling, Time Series</h2>
    <p>Emil Laftchiev currently works in the Data Analytics group at Mitsubishi Electric Research Laboratories. Emil's research focuses on Machine Learning, Data Mining techniques in anomaly detection, time series analytics, and predictive modeling. His most recent publication is 'An IoT system to estimate personal thermal comfort'.</p>
    <PublicationsList data={publications}></PublicationsList>
  </Layout>
  )
}

export const data = graphql`
  {
    allNodePublications(
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        id
        title
        body {
          processed
        }
        path {
          alias
        }
      }
    }
  }
`;
