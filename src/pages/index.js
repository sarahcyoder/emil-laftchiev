import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PublicationsList from "../components/publicationsList"

export default ({ data }) => {

  const publications = data.allNodePublications;
  const heroImage = data.hero.nodes[0].publicURL;
  
  return (
    <div id="homepage">
      <Layout
        headerData={{
          title: 'Portfolio',
          height: '85vh',
          background: heroImage,
          link: '/#portfolio',
        }}  
      >
      <SEO title="Home" />
      <h2>Machine Learning, Predictive Modeling, Time Series</h2>
      <p>Emil Laftchiev currently works in the Data Analytics group at Mitsubishi Electric Research Laboratories. Emil's research focuses on Machine Learning, Data Mining techniques in anomaly detection, time series analytics, and predictive modeling. His most recent publication is 'An IoT system to estimate personal thermal comfort'.</p>
      <PublicationsList id="portfolio" data={publications}></PublicationsList>
    </Layout>
  </div>
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
    hero: allFile(filter: { absolutePath: { regex: "/nerve_cell/" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
