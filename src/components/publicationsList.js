import React from 'react';
import PropTypes from 'prop-types';

import PublicationTeaser from '../components/publicationTeaser'

const PublicationsList = ({ data }) => {

  return (
    <div>
      {data &&
        data.nodes.map(node => {
          return <PublicationTeaser key={node.title} article={node} />;;
        })}
    </div>
  );
};

PublicationsList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PublicationsList;
