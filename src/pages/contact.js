import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  const heroImage = data.hero.nodes[0].publicURL;

  return (
    <div id="contact-page">
      <Layout
        headerData={{
          title: 'Contact',
          height: '70vh',
          link: '/contact',
          background: heroImage,
        }}  
      >
        <SEO title="Contact" />
        <h2>Learn more about me, or start a conversation.</h2>
        <h3><a href="mailto:emil.laftchiev@gmail.com">emil.laftchiev@gmail.com</a></h3>
        <h3>
          <a
            href="https://www.linkedin.com/in/emillaftchiev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/emillaftchiev
          </a>
        </h3>
      </Layout>
    </div>
  )
}

export const data = graphql`
  {
    hero: allFile(filter: { absolutePath: { regex: "/circuit_board_banner/" } }) {
      nodes {
        publicURL
      }
    }
  }
`;