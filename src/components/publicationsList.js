import React from 'react';
import PropTypes from 'prop-types';

import PublicationTeaser from '../components/publicationTeaser'

const PublicationsList = ({ data, id }) => {

  return (
    <div id={id}>
      {data &&
        data.nodes.map(node => {
          return <PublicationTeaser key={node.title} article={node} />;;
        })}
    </div>
  );
};

PublicationsList.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string,
};

PublicationsList.defaultProps = {
  id: null,
}

export default PublicationsList;
