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
      }}  
    >
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
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
    }
  }
`;

export default Publications;
