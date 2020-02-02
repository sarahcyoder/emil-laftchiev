import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import containerStyles from "../components/contact.module.css"

export default ({data}) => {
  const heroImage = data.hero.nodes[0].publicURL;

  return (
    <Layout
      headerData={{
        title: 'Contact',
        subTitle: 'Learn more about me, or start a conversation.',
        height: '70vh',
        link: '/contact',
        background: heroImage,
      }}  
    >
      <SEO title="Contact" />
      <h3 className={containerStyles.email}><a href="mailto:emil.laftchiev@gmail.com">emil.laftchiev[@]gmail.com</a></h3>
      <h3 className={containerStyles.linkedin}>
        <a
          href="https://www.linkedin.com/in/emillaftchiev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/emillaftchiev
        </a>
      </h3>
    </Layout>
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