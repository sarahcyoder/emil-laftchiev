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
          background: heroImage,
        }}  
      >
      <SEO title="Home" />
      <h2>Emil Laftchiev, Principal Research Scientist</h2>
      <p>I am a machine learning scientist at MERL. I work with time series data,
        envisioning and creating machine learning and computer science algorithms.
        These algorithms find applications in emerging technologies like the Internet
        of Things and wearable devices, and focus on learning user preferences, anomaly
        detection, and time series prediction. My current focus is on deep learning
        methods of generative modeling such as VAEs and GANs as well as modern methods
        of time series analysis. Ongoing themes of my research include time series
        pattern matching, anomaly detection, machine learning for big data, and
        predictive modeling.</p>
      <p>At MERL I am involved in directing the research direction by proposing and
        executing new projects, maintaining state-of-the-art knowledge in machine
        learning, publishing new algorithms and findings in competitive academic
        venues, patenting applications relevant to the business, developing prototypes
        for demonstration to senior management, and transferring knowledge to my
        international counterparts in Japan.</p>
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
