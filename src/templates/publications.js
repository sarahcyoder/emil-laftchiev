import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import containerStyles from './publications.module.css';

const Publications = ({ data }) => {
  const post = data.nodePublications;

  return (
    <Layout
      headerData={{
        title: post.title,
        subTitle: post.field_date_published,
        height: '65vh',
        link: window.location.pathname,
      }}  
    >
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
      <div>
        {post.field_publication_url ? <a className={containerStyles.cta} href={post.field_publication_url.uri} target='_blank' rel='noopener noreferrer'>Read Full Text</a> : null}
        <Link className={containerStyles.cta} to='/publications'>See More Publications</Link>
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
