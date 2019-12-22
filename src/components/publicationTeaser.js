import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PublicationTeaser = ({ article }) => {

  return (
    <div>
      <Link to={article.path.alias}>
        <h3>{article.title}</h3>
      </Link>
    </div>
  );
};

PublicationTeaser.propTypes = {
  article: PropTypes.object.isRequired,
};

export default PublicationTeaser;
