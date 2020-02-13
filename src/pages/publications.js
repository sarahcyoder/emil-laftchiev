import React from "react"
import { graphql } from 'gatsby';

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
          title: 'Publications',
          subTitle: "Emil's Published Papers",
          height: '85vh',
          color: '#1b2a46',
          background: heroImage,
        }}  
      >
      <SEO title="Home" />
      <PublicationsList id="publications" data={publications}></PublicationsList>
    </Layout>
  </div>
  )
}

export const data = graphql`
  {
    allNodePublications(
      sort: {fields: field_date_published, order: DESC}
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
        field_date_published(formatString: "MMMM YYYY")
      }
    }
    hero: allFile(filter: { absolutePath: { regex: "/time_series/" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
