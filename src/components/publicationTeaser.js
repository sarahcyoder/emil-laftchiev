import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import containerStyles from './publicationTeaser.module.css';

const PublicationTeaser = ({ article }) => {

  return (
    <div className={containerStyles.card}>
      <Link className={containerStyles.link} to={article.path.alias}>
        <h3>{article.title}</h3>
        <div className={containerStyles.body} dangerouslySetInnerHTML={{ __html: article.body.processed }}></div>
        <span>Read More</span>
      </Link>
    </div>
  );
};

PublicationTeaser.propTypes = {
  article: PropTypes.object.isRequired,
};

export default PublicationTeaser;
