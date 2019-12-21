import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Publications = ({ data }) => {
  const post = data.nodePublications;
  console.log(post);
  return (
   post.title
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
