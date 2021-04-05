import React from "react"
import { Link, graphql } from 'gatsby';

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
          background: heroImage,
        }}  
      >
      <SEO title="Home" />
      <h2>Emil Laftchiev, Senior Machine Learning Scientist</h2>
      <p>I am a senior machine learning scientist. I work with data to envision and create machine learning and computer science algorithms (also known as AI algorithms).</p>
      <p> In my career these algorithms have found applications in recommendation systems, industrial systems, vehicle mapping and the Internet of Things. I work with text, image, and time series data from an array of sources including product catalogs, industrial devices and wearable devices. My work primarily focuses on recommendation, learning user preferences, anomaly detection, and time series prediction.</p>
      <p>Here are some of my most recent publications.</p>
      <PublicationsList id="portfolio" data={publications}></PublicationsList>
      <div className="button"><Link to='/publications'>View All Publications</Link></div>
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
