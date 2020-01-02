import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout'

const Publications = ({ data }) => {
  const post = data.nodePublications;

  return (
    <Layout
      headerData={{
        title: post.title,
        height: '50vh',
        link: window.location.pathname,
      }}  
    >
      <div>{post.field_date_published}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
      <div>
        <a
          href={post.field_publication_url.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Text
        </a>
      </div>
    </Layout>
  );
};

Publications.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($PostId: String!) {
    nodePublications(id: { eq: $PostId }) {
      id
      title
      body {
        processed
      }
      field_publication_url {
        uri
      }
      field_date_published(formatString: "MMMM YYYY")
    }
  }
`;

export default Publications;
