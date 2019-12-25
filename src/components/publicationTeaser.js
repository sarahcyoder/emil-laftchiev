import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import containerStyles from './publicationTeaser.module.css';

const PublicationTeaser = ({ article }) => {

  const teaserText = article.body.processed;
  const clippedText = teaserText.substr(0, 120) + "\u2026</p>";

  return (
    <div className={containerStyles.card}>
      <Link className={containerStyles.link} to={article.path.alias}>
        <h3 className={containerStyles.title}>{article.title}</h3>
        <div className={containerStyles.body} dangerouslySetInnerHTML={{ __html: clippedText }}></div>
        <div className={containerStyles.cta}>Read More</div>
      </Link>
    </div>
  );
};

PublicationTeaser.propTypes = {
  article: PropTypes.object.isRequired,
};

export default PublicationTeaser;
