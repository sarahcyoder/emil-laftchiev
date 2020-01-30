import React from "react"
import { Link } from 'gatsby';

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
          title: 'Big Data Analytics',
          subTitle: 'Machine Learning, Predictive Modeling, Time Series',
          height: '85vh',
          color: '#1b2a46',
          link: '/#portfolio',
          background: heroImage,
        }}  
      >
      <SEO title="Home" />
      <h2>Principal Research Scientist</h2>
      <p>Emil currently works in the Data Analytics group at Mitsubishi Electric Research Laboratories. Emil's research focuses on machine learning, data mining techniques in anomaly detection, time series analytics, and predictive modeling.</p>
      <p>Here are some of his most recent publications.</p>
      <PublicationsList id="portfolio" data={publications}></PublicationsList>
      <div id="button"><Link to='/publications'>View All Publications</Link></div>
    </Layout>
  </div>
  )
}

export const data = graphql`
  {
    allNodePublications(
      sort: {fields: field_date_published, order: DESC}
      limit: 4
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
    hero: allFile(filter: { absolutePath: { regex: "/web_banner/" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
